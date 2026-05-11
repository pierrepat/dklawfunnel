// src/lib/tracking.ts
// Centralized tracking: UTM capture + PostHog events + Meta Pixel events.
// Safe to call even if PostHog/fbq haven't loaded — silently no-ops on failure.

const UTM_KEYS = [
    "utm_source",
    "utm_medium",
    "utm_campaign",
    "utm_term",
    "utm_content",
    "fbclid",
    "gclid",
] as const;

type UTMData = {
    utm_source?: string;
    utm_medium?: string;
    utm_campaign?: string;
    utm_term?: string;
    utm_content?: string;
    fbclid?: string;
    gclid?: string;
    landing_url?: string;
    referrer?: string;
};

const STORAGE_KEY = "dklaw_tracking_utms";

/**
 * Capture UTM params from URL on first page load.
 * Persists to sessionStorage so they survive within the session.
 * Call once on app mount.
 */
export function captureUTMs(): UTMData {
    if (typeof window === "undefined") return {};

    // If we already have UTMs in this session, return them
    const existing = sessionStorage.getItem(STORAGE_KEY);
    if (existing) {
        try {
            return JSON.parse(existing);
        } catch {
            // Fall through and re-capture
        }
    }

    const params = new URLSearchParams(window.location.search);
    const utms: UTMData = {};

    UTM_KEYS.forEach((key) => {
        const value = params.get(key);
        if (value) {
            utms[key] = value;
        }
    });

    utms.landing_url = window.location.href;
    utms.referrer = document.referrer || "direct";

    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(utms));
    return utms;
}

/**
 * Read previously captured UTMs from sessionStorage.
 * Use this when submitting the lead to include attribution data.
 */
export function getStoredUTMs(): UTMData {
    if (typeof window === "undefined") return {};
    const stored = sessionStorage.getItem(STORAGE_KEY);
    if (!stored) return {};
    try {
        return JSON.parse(stored);
    } catch {
        return {};
    }
}

declare global {
    interface Window {
        posthog?: {
            capture: (event: string, properties?: Record<string, unknown>) => void;
            identify: (id: string, properties?: Record<string, unknown>) => void;
        };
        fbq?: (...args: unknown[]) => void;
    }
}

/** Fire a PostHog event. Safe no-op if PostHog isn't loaded. */
export function trackEvent(eventName: string, properties?: Record<string, unknown>): void {
    if (typeof window === "undefined") return;
    try {
        if (window.posthog) {
            window.posthog.capture(eventName, properties);
        }
    } catch (err) {
        console.warn("PostHog event failed:", err);
    }
}

/** Identify a user in PostHog (e.g., after they submit a lead). */
export function identifyUser(distinctId: string, properties?: Record<string, unknown>): void {
    if (typeof window === "undefined") return;
    try {
        if (window.posthog) {
            window.posthog.identify(distinctId, properties);
        }
    } catch (err) {
        console.warn("PostHog identify failed:", err);
    }
}

/** Fire a Meta Pixel event. Safe no-op if Pixel isn't loaded. */
export function trackMetaEvent(eventName: string, params?: Record<string, unknown>): void {
    if (typeof window === "undefined") return;
    try {
        if (window.fbq) {
            window.fbq("track", eventName, params);
        }
    } catch (err) {
        console.warn("Meta Pixel event failed:", err);
    }
}

// ---------------------------------------------------------------
// Funnel-specific event helpers
// ---------------------------------------------------------------

export function trackQuizStarted() {
    trackEvent("quiz_started", { funnel: "dklaw_mva" });
    trackMetaEvent("ViewContent", { content_name: "quiz_start", content_category: "mva_funnel" });
}

export function trackStepCompleted(stepName: string) {
    trackEvent("quiz_step_completed", {
        step: stepName,
        funnel: "dklaw_mva",
    });
}

export function trackPhoneSubmitted(phoneE164: string) {
    trackEvent("phone_submitted", { phone_e164: phoneE164 });
    trackMetaEvent("AddToCart", { content_name: "phone_step" });
}

export function trackOTPSent() {
    trackEvent("otp_sent");
}

export function trackOTPVerified() {
    trackEvent("otp_verified");
}

export function trackLeadSubmitted(leadData: {
    email?: string;
    state?: string;
    injurySeverity?: string;
    represented?: string;
}) {
    trackEvent("lead_submitted", {
        state: leadData.state,
        injury_severity: leadData.injurySeverity,
        represented: leadData.represented,
    });
    trackMetaEvent("Lead", {
        value: 300,
        currency: "USD",
        content_category: "mva_lead",
    });
    if (leadData.email) {
        identifyUser(leadData.email, {
            email: leadData.email,
            state: leadData.state,
        });
    }
}

export function trackLeadSubmissionFailed(errorMessage: string) {
    trackEvent("lead_submission_failed", { error: errorMessage });
}