import type { FunnelData } from "../types/funnel";
import { getStoredUTMs } from "./tracking";

const GHL_WEBHOOK_URL = import.meta.env.VITE_GHL_WEBHOOK_URL as string | undefined;

export type LeadPayload = {
  answers: FunnelData;
  meta?: Record<string, string>;
};

/** Translate internal medical_received codes to display values for the client sheet. */
function formatMedicalReceived(value: FunnelData["medical_received"]): string {
  switch (value) {
    case "within_30":
      return "Within 30 days";
    case "after_30":
      return "After 30 days";
    case "not_yet":
      return "Haven't received treatment yet";
    default:
      return "";
  }
}

/** Translate internal injury_severity codes to display values. */
function formatInjurySeverity(value: FunnelData["injury_severity"]): string {
  switch (value) {
    case "minor":
      return "Minor";
    case "significant":
      return "Significant";
    case "severe":
      return "Severe";
    case "none":
      return "None";
    default:
      return "";
  }
}

/** Translate at_fault codes to readable values. */
function formatAtFault(value: FunnelData["at_fault"]): string {
  switch (value) {
    case "No":
      return "Other driver at fault";
    case "Yes":
      return "I was at fault";
    case "Yes_Passenger":
      return "I was a passenger; my driver at fault";
    case "Not sure":
      return "Not sure";
    default:
      return "";
  }
}

/** Read TrustedForm cert URL from hidden field populated by trustedform.js */
function getTrustedFormCertUrl(): string {
  if (typeof document === "undefined") return "";
  const el = document.getElementById("xxTrustedFormCertUrl") as HTMLInputElement | null;
  return el?.value || "";
}

/** Maps quiz data → GHL inbound webhook payload. */
function buildGhlPayload(answers: FunnelData) {
  // Format incident date — ISO if custom date, otherwise the preset label.
  let incidentDate = "";
  if (answers.incident_year && answers.incident_month && answers.incident_day) {
    incidentDate = `${answers.incident_year}-${String(answers.incident_month).padStart(2, "0")}-${String(answers.incident_day).padStart(2, "0")}`;
  } else if (answers.incident_date_label) {
    incidentDate = answers.incident_date_label;
  }

  const submittedAt = new Date().toISOString();

  // Pull UTM/attribution data captured on landing
  const utms = getStoredUTMs();

  // Pull TrustedForm cert URL from hidden field
  const trustedFormCertUrl = getTrustedFormCertUrl();

  return {
    // Identity
    First: answers.first_name_cleaned || answers.first_name,
    Last: answers.last_name_cleaned || answers.last_name,
    Email: answers.email,
    Phone: answers.phone_e164,
    PhoneTenDigits: answers.phone_normalized_10_digits,

    // Case details (human-readable values for the client sheet)
    Summary: answers.case_description,
    AccidentType: answers.accident_type,
    InjurySeverity: formatInjurySeverity(answers.injury_severity),
    AtFault: formatAtFault(answers.at_fault),
    Represented: answers.represented, // already "Yes" / "No"
    MedicalReceived: formatMedicalReceived(answers.medical_received),
    incidentDate,
    incidentDateLabel: answers.incident_date_label,
    incidentDaysAgo: answers.incident_days_ago,

    // Geo
    state: answers.state,
    postalCode: "", // Not collected in funnel — DK Law gets ZIP at intake call

    // Compliance
    OtpVerified: answers.otp_verified ? "Yes" : "No",
    ipAddress: answers.ip_address,
    consentText: answers.consent_text,
    consentTimestamp: answers.consent_timestamp,
    userAgent: typeof navigator !== "undefined" ? navigator.userAgent : "",
    TrustedFormCertUrl: trustedFormCertUrl,

    // Attribution
    utm_source: utms.utm_source || "",
    utm_medium: utms.utm_medium || "",
    utm_campaign: utms.utm_campaign || "",
    utm_content: utms.utm_content || "",
    utm_term: utms.utm_term || "",
    fbclid: utms.fbclid || "",
    gclid: utms.gclid || "",
    landing_url: utms.landing_url || "",
    referrer: utms.referrer || "",

    // Source / routing
    source: "mvacompensation.com/dklaw quiz",
    submittedAt,
  };
}

/** Sends the lead to GHL. Throws on network/HTTP failure. */
export async function submitLead(payload: LeadPayload): Promise<void> {
  if (!GHL_WEBHOOK_URL) {
    console.error("submitLead: VITE_GHL_WEBHOOK_URL not configured");
    throw new Error("Lead submission endpoint not configured");
  }

  const body = buildGhlPayload(payload.answers);

  const res = await fetch(GHL_WEBHOOK_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    const text = await res.text().catch(() => "");
    throw new Error(`GHL webhook returned ${res.status}: ${text}`);
  }
}