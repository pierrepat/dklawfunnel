import {
  ArrowLeft,
  Ban,
  Check,
  HelpCircle,
  Mail,
  Phone,
  Star,
  UserRound,
  Users,
} from "lucide-react";
import { useEffect, useMemo, useReducer, useState, type Dispatch, type ReactNode, type SetStateAction } from "react";
import {
  ACCIDENT_HOW_OPTIONS,
  INCIDENT_PRESETS,
  INJURY_TYPE_OPTIONS,
  dkLawQuizProgress,
  funnelReducer,
  getStepSubtitle,
  getStepTitle,
  initialDkLawContext,
} from "../data/funnelConfig";
import { assets } from "../data/assets";
import type { FunnelAction, FunnelContext } from "../types/funnel";
import {
  cleanName,
  formatPhoneMask,
  normalizeUsPhoneToTenDigits,
  validateEmail,
  validateName,
  validateNamesDistinct,
  validateOtpSix,
  validateUsPhone,
} from "../lib/validation";
import { submitLead } from "../lib/submitLead";
import {
  captureUTMs,
  trackQuizStarted,
  trackStepViewed,
  trackStepCompleted,
  trackPhoneSubmitted,
  trackOTPSent,
  trackOTPVerified,
  trackLeadSubmitted,
  trackLeadSubmissionFailed,
} from "../lib/tracking";
import { FunnelCard } from "./FunnelCard";
import { Header } from "./Header";
import { WelcomeHero } from "./HeroIntro";
import { NavigationButtons } from "./NavigationButtons";
import { OptionButton } from "./OptionButton";
import { ProgressBar } from "./ProgressBar";

type FieldErrors = Record<string, string>;

type InnerProps = {
  ctx: FunnelContext;
  dispatch: Dispatch<FunnelAction>;
  fieldErrors: FieldErrors;
  setFieldErrors: Dispatch<SetStateAction<FieldErrors>>;
  goBack: () => void;
  otpSending: boolean;
  otpVerifying: boolean;
  otpServerError: string | null;
  onSendOtp: () => Promise<void>;
  onVerifyOtp: () => Promise<void>;
  onResendOtp: () => Promise<void>;
  selectedInjuryTypes: string[];
  setSelectedInjuryTypes: Dispatch<SetStateAction<string[]>>;
};

/* ── SVG icons for injury types (M&M style blue line-art) ── */
function InjuryIcon({ type }: { type: string }) {
  const cls = "h-7 w-7 text-blue-600";
  switch (type) {
    case "Neck, back, knee, or shoulder injury":
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="5" r="3" />
          <path d="M12 8v4" />
          <path d="M9 12c-1 2-1 4 0 6" />
          <path d="M15 12c1 2 1 4 0 6" />
          <path d="M8 20h8" />
        </svg>
      );
    case "Broken bones":
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 5l4 4" />
          <path d="M15 15l4 4" />
          <path d="M9 9l2 2" />
          <path d="M13 13l-2-2" />
          <path d="M5 5c-1-1-2 0-2 1s1 2 2 1" />
          <path d="M19 19c1 1 2 0 2-1s-1-2-2-1" />
          <path d="M11 11l-3 3" />
        </svg>
      );
    case "Severe injury / death":
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2a7 7 0 0 1 7 7c0 3-2 5.5-4 7l-3 4-3-4c-2-1.5-4-4-4-7a7 7 0 0 1 7-7z" />
          <path d="M12 9v2" />
          <circle cx="12" cy="13" r="0.5" fill="currentColor" />
        </svg>
      );
    default: // "Other"
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 3h6l3 6-3 6H9l-3-6z" />
          <path d="M12 8v3" />
          <circle cx="12" cy="14" r="0.5" fill="currentColor" />
        </svg>
      );
  }
}

/* ── SVG icons for accident_how (M&M style - different crash types) ── */
function AccidentHowIcon({ option }: { option: string }) {
  const cls = "h-7 w-7 text-blue-600";
  switch (option) {
    case "I was rear-ended":
      return (
        <svg className={cls} viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="14" width="12" height="8" rx="1.5" />
          <rect x="18" y="14" width="12" height="8" rx="1.5" />
          <circle cx="6" cy="25" r="2" />
          <circle cx="10" cy="25" r="2" />
          <circle cx="22" cy="25" r="2" />
          <circle cx="26" cy="25" r="2" />
          <path d="M14 18h4" strokeWidth="2" />
          <path d="M16 10l-2-3" />
          <path d="M16 10l2-3" />
          <path d="M16 10v4" />
        </svg>
      );
    case "The other party failed to yield":
      return (
        <svg className={cls} viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="14" width="12" height="8" rx="1.5" />
          <rect x="14" y="6" width="8" height="12" rx="1.5" transform="rotate(45 18 12)" />
          <circle cx="6" cy="25" r="2" />
          <circle cx="10" cy="25" r="2" />
          <path d="M14 16l4-4" />
          <path d="M16 8l-2-2" />
          <path d="M16 8l2-2" />
        </svg>
      );
    case "The other party violated the rules of the road":
      return (
        <svg className={cls} viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="14" width="12" height="8" rx="1.5" />
          <rect x="18" y="14" width="12" height="8" rx="1.5" />
          <circle cx="6" cy="25" r="2" />
          <circle cx="10" cy="25" r="2" />
          <circle cx="22" cy="25" r="2" />
          <circle cx="26" cy="25" r="2" />
          <circle cx="16" cy="8" r="4" />
          <line x1="16" y1="6" x2="16" y2="10" strokeWidth="2" />
          <circle cx="16" cy="11.5" r="0.5" fill="currentColor" />
        </svg>
      );
    default: // "Other"
      return (
        <svg className={cls} viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="6" y="14" width="20" height="8" rx="1.5" />
          <circle cx="10" cy="25" r="2" />
          <circle cx="22" cy="25" r="2" />
          <path d="M12 10l4-4 4 4" />
        </svg>
      );
  }
}

function renderQuizFields(p: InnerProps) {
  const {
    ctx, dispatch, fieldErrors, setFieldErrors,
    otpSending, otpVerifying, otpServerError, onSendOtp, onVerifyOtp, onResendOtp,
    selectedInjuryTypes, setSelectedInjuryTypes,
  } = p;

  switch (ctx.step) {
    case "injury":
      return (
        <>
          <OptionButton
            label="Yes"
            icon={<UserRound size={22} />}
            onClick={() => {
              trackStepCompleted("injury");
              dispatch({ type: "SELECT_INJURY", injured: true });
            }}
          />
          <OptionButton
            label="No"
            icon={<Ban size={22} />}
            onClick={() => {
              trackStepCompleted("injury");
              dispatch({ type: "SELECT_INJURY", injured: false });
            }}
          />
        </>
      );

    case "at_fault":
      return (
        <>
          <OptionButton
            label="Them"
            icon={<Users size={22} />}
            onClick={() => {
              trackStepCompleted("at_fault");
              dispatch({ type: "SELECT_AT_FAULT", value: "No" });
            }}
          />
          <OptionButton
            label="Me"
            icon={<UserRound size={22} />}
            onClick={() => {
              trackStepCompleted("at_fault");
              dispatch({ type: "SELECT_AT_FAULT", value: "Yes" });
            }}
          />
          <OptionButton
            label="I don't know"
            icon={<HelpCircle size={22} />}
            onClick={() => {
              trackStepCompleted("at_fault");
              dispatch({ type: "SELECT_AT_FAULT", value: "Not sure" });
            }}
          />
        </>
      );

    case "injury_type": {
      const toggleType = (t: string) => {
        setSelectedInjuryTypes((prev) =>
          prev.includes(t) ? prev.filter((x) => x !== t) : [...prev, t]
        );
      };

      return (
        <>
          {INJURY_TYPE_OPTIONS.map((opt) => (
            <button
              key={opt}
              type="button"
              onClick={() => toggleType(opt)}
              className={[
                "flex w-full items-center justify-between rounded-xl border-2 p-4 text-left transition-all duration-200",
                "hover:border-blue-400 hover:bg-blue-50/50",
                selectedInjuryTypes.includes(opt)
                  ? "border-blue-500 bg-blue-50"
                  : "border-gray-200 bg-white",
              ].join(" ")}
            >
              <div className="flex items-center gap-3">
                <InjuryIcon type={opt} />
                <span className="text-base font-semibold text-gray-900">{opt}</span>
              </div>
              <div
                className={[
                  "flex h-5 w-5 shrink-0 items-center justify-center rounded border-2 transition-colors",
                  selectedInjuryTypes.includes(opt)
                    ? "border-blue-500 bg-blue-500"
                    : "border-gray-300",
                ].join(" ")}
              >
                {selectedInjuryTypes.includes(opt) ? (
                  <Check className="h-3 w-3 text-white" />
                ) : null}
              </div>
            </button>
          ))}
          <NavigationButtons
            showBack={false}
            onNext={() => {
              if (selectedInjuryTypes.length === 0) return;
              trackStepCompleted("injury_type");
              dispatch({ type: "SELECT_INJURY_TYPES", types: selectedInjuryTypes });
            }}
            nextLabel="Continue"
            nextDisabled={selectedInjuryTypes.length === 0}
          />
        </>
      );
    }

    case "accident_how":
      return (
        <>
          {ACCIDENT_HOW_OPTIONS.map((opt) => (
            <OptionButton
              key={opt}
              label={opt}
              icon={<AccidentHowIcon option={opt} />}
              onClick={() => {
                trackStepCompleted("accident_how");
                dispatch({ type: "SELECT_ACCIDENT_HOW", value: opt });
              }}
            />
          ))}
        </>
      );

    case "incident_date":
      return (
        <>
          {INCIDENT_PRESETS.map((preset) => (
            <OptionButton
              key={preset.label}
              label={preset.label}
              showArrow={false}
              onClick={() => {
                trackStepCompleted("incident_date");
                dispatch({ type: "SELECT_INCIDENT_PRESET", daysAgo: preset.daysAgo, label: preset.label });
              }}
            />
          ))}
        </>
      );

    case "contact": {
      const firstNameTouched = ctx.data.first_name.trim().length > 0;
      const lastNameTouched = ctx.data.last_name.trim().length > 0;
      const phoneTouched = (ctx.data.phone_raw || "").trim().length > 0;
      const firstNameError = firstNameTouched ? validateName(ctx.data.first_name, "first name") : null;
      const lastNameError = lastNameTouched ? validateName(ctx.data.last_name, "last name") : null;
      const namesDistinctError = validateNamesDistinct(ctx.data.first_name, ctx.data.last_name);
      const phoneError = validateUsPhone(ctx.data.phone_raw || ctx.data.phone);
      const phoneInputValue = formatPhoneMask(ctx.data.phone_raw || ctx.data.phone);

      const allValid =
        Boolean(firstNameTouched && lastNameTouched && phoneTouched) &&
        !validateName(ctx.data.first_name, "first name") &&
        !validateName(ctx.data.last_name, "last name") &&
        !namesDistinctError &&
        !phoneError;

      return (
        <>
          {/* Name */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="mb-1.5 block text-sm font-medium text-gray-700">First Name</label>
              <input
                type="text"
                name="given-name"
                autoComplete="given-name"
                value={ctx.data.first_name}
                onChange={(e) => dispatch({ type: "PATCH_DATA", patch: { first_name: e.target.value } })}
                maxLength={100}
                className="w-full rounded-lg border-2 border-gray-200 bg-white p-3.5 text-gray-900 transition-colors focus:border-blue-500 focus:outline-none"
              />
              {(fieldErrors.first_name || firstNameError || namesDistinctError) ? (
                <p className="mt-1 text-sm text-red-500">
                  {fieldErrors.first_name ?? firstNameError ?? namesDistinctError}
                </p>
              ) : null}
            </div>
            <div>
              <label className="mb-1.5 block text-sm font-medium text-gray-700">Last Name</label>
              <input
                type="text"
                name="family-name"
                autoComplete="family-name"
                value={ctx.data.last_name}
                onChange={(e) => dispatch({ type: "PATCH_DATA", patch: { last_name: e.target.value } })}
                maxLength={100}
                className="w-full rounded-lg border-2 border-gray-200 bg-white p-3.5 text-gray-900 transition-colors focus:border-blue-500 focus:outline-none"
              />
              {(fieldErrors.last_name || lastNameError) ? (
                <p className="mt-1 text-sm text-red-500">{fieldErrors.last_name ?? lastNameError}</p>
              ) : null}
            </div>
          </div>

          {/* Phone */}
          <div>
            <label className="mb-1.5 block text-sm font-medium text-gray-700">Phone Number</label>
            <div className="relative">
              <Phone className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
              <input
                type="tel"
                inputMode="numeric"
                name="tel"
                autoComplete="tel"
                value={phoneInputValue}
                onChange={(e) => {
                  const raw = e.target.value;
                  const normalized10 = normalizeUsPhoneToTenDigits(raw);
                  dispatch({
                    type: "PATCH_DATA",
                    patch: {
                      phone_raw: raw,
                      phone: normalized10,
                      phone_normalized_10_digits: normalized10,
                      phone_e164: normalized10 ? `+1${normalized10}` : "",
                    },
                  });
                }}
                maxLength={18}
                placeholder="(415) 123-4567"
                className="w-full rounded-lg border-2 border-gray-200 bg-white p-3.5 pl-10 text-gray-900 tabular-nums transition-colors focus:border-blue-500 focus:outline-none"
              />
            </div>
            {phoneTouched && (fieldErrors.phone || phoneError) ? (
              <p className="mt-1 text-sm text-red-500">{fieldErrors.phone ?? phoneError}</p>
            ) : null}
          </div>

          {/* Email */}
          <div>
            <label className="mb-1.5 block text-sm font-medium text-gray-700">Email Address</label>
            <div className="relative">
              <Mail className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
              <input
                type="email"
                name="email"
                autoComplete="email"
                value={ctx.data.email}
                onChange={(e) => dispatch({ type: "PATCH_DATA", patch: { email: e.target.value } })}
                maxLength={255}
                placeholder="Optional"
                className="w-full rounded-lg border-2 border-gray-200 bg-white p-3.5 pl-10 text-gray-900 transition-colors focus:border-blue-500 focus:outline-none"
              />
            </div>
            {fieldErrors.email ? <p className="mt-1 text-sm text-red-500">{fieldErrors.email}</p> : null}
          </div>

          {otpServerError ? (
            <p className="text-sm text-red-500">{otpServerError}</p>
          ) : null}

          {/* TCPA consent */}
          <p className="text-xs leading-relaxed text-gray-400" data-tf-element-role="consent-description">
            By submitting my phone number above I authorize DK Law, and its service providers, to deliver calls including using an
            automatic telephone dialing system or artificial or prerecorded voice,
            to the number submitted. Consent is not a condition to receive
            services. Msg frequency varies. Msg & data rates may apply. Upon
            receipt of any message, reply STOP to unsubscribe.
          </p>

          <NavigationButtons
            showBack={false}
            onNext={async () => {
              const errors: FieldErrors = {};
              const e1 = validateName(ctx.data.first_name, "first name");
              if (e1) errors.first_name = e1;
              const e2 = validateName(ctx.data.last_name, "last name");
              if (e2) errors.last_name = e2;
              const e3 = validateNamesDistinct(ctx.data.first_name, ctx.data.last_name);
              if (e3) errors.first_name = e3;
              const phoneErr = validateUsPhone(ctx.data.phone_raw || ctx.data.phone);
              if (phoneErr) errors.phone = phoneErr;
              if (ctx.data.email.trim()) {
                const emailErr = validateEmail(ctx.data.email);
                if (emailErr) errors.email = emailErr;
              }

              if (Object.keys(errors).length > 0) {
                setFieldErrors(errors);
                return;
              }
              setFieldErrors({});

              dispatch({
                type: "PATCH_DATA",
                patch: {
                  first_name: cleanName(ctx.data.first_name),
                  last_name: cleanName(ctx.data.last_name),
                  first_name_cleaned: cleanName(ctx.data.first_name),
                  last_name_cleaned: cleanName(ctx.data.last_name),
                },
              });

              const normalized10 = normalizeUsPhoneToTenDigits(ctx.data.phone_raw || ctx.data.phone);
              dispatch({
                type: "PATCH_DATA",
                patch: {
                  phone: normalized10,
                  phone_normalized_10_digits: normalized10,
                  phone_e164: `+1${normalized10}`,
                },
              });

              trackStepCompleted("contact");
              trackPhoneSubmitted(`+1${normalized10}`);
              await onSendOtp();
            }}
            nextLabel={otpSending ? "Sending..." : "Continue"}
            nextDisabled={!allValid || otpSending}
            consentGrantor
          />

          {/* Bottom consent link — M&M style */}
          <p className="text-center text-xs text-gray-400">
            By submitting this form, you agree to our{" "}
            <a href="#terms" className="text-blue-500 hover:underline">Terms</a>
            {" & acknowledge our "}
            <a href="#privacy" className="text-blue-500 hover:underline">Privacy Policy</a>.
          </p>
        </>
      );
    }

    case "phone_otp": {
      const masked = formatPhoneMask(ctx.data.phone);
      return (
        <>
          <p className="mb-4 text-center text-sm text-gray-500">
            We sent a 6-digit code to {masked}. It may take 30-60 seconds to arrive.
          </p>
          <input
            type="text"
            inputMode="numeric"
            autoComplete="one-time-code"
            value={ctx.data.phone_otp}
            onChange={(e) =>
              dispatch({
                type: "PATCH_DATA",
                patch: { phone_otp: e.target.value.replace(/\D/g, "").slice(0, 6) },
              })
            }
            maxLength={6}
            placeholder="000000"
            className="w-full rounded-lg border-2 border-gray-200 bg-white p-4 text-center text-xl tabular-nums tracking-widest text-gray-900 transition-colors focus:border-blue-500 focus:outline-none"
          />
          {fieldErrors.phone_otp ? (
            <p className="mt-2 text-sm text-red-500">{fieldErrors.phone_otp}</p>
          ) : null}
          {otpServerError ? (
            <p className="mt-2 text-sm text-red-500">{otpServerError}</p>
          ) : null}
          <button
            type="button"
            disabled={otpSending}
            className="mt-4 text-sm font-medium text-blue-500 underline-offset-4 hover:underline disabled:opacity-50"
            onClick={onResendOtp}
          >
            {otpSending ? "Resending..." : "Resend code"}
          </button>
          <NavigationButtons
            showBack={false}
            onNext={async () => {
              const err = validateOtpSix(ctx.data.phone_otp);
              if (err) {
                setFieldErrors({ phone_otp: err });
                return;
              }
              setFieldErrors({});
              await onVerifyOtp();
            }}
            nextLabel={otpVerifying ? "Verifying..." : "Verify & See My Results"}
            nextDisabled={otpVerifying}
          />
        </>
      );
    }

    default:
      return null;
  }
}

export function Funnel() {
  const [ctx, dispatch] = useReducer(funnelReducer, initialDkLawContext);
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const [otpSending, setOtpSending] = useState(false);
  const [otpVerifying, setOtpVerifying] = useState(false);
  const [otpServerError, setOtpServerError] = useState<string | null>(null);
  const [submitState, setSubmitState] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [selectedInjuryTypes, setSelectedInjuryTypes] = useState<string[]>([]);

  useEffect(() => {
    captureUTMs();
    trackQuizStarted();
  }, []);

  useEffect(() => {
    trackStepViewed(ctx.step);
  }, [ctx.step]);

  // "Checking" screen — submit lead, then transition to submitted
  useEffect(() => {
    if (ctx.step !== "checking") return;
    let cancelled = false;

    const run = async () => {
      setSubmitState("submitting");
      try {
        await submitLead({ answers: { ...ctx.data } });
        trackLeadSubmitted({
          email: ctx.data.email,
          state: ctx.data.state,
          injurySeverity: ctx.data.injury_severity,
          represented: ctx.data.represented,
        });
        if (!cancelled) setSubmitState("success");
      } catch (err) {
        console.error("submitLead error:", err);
        const errorMsg = err instanceof Error ? err.message : "Unknown error";
        trackLeadSubmissionFailed(errorMsg);
        if (!cancelled) setSubmitState("error");
      }
      await new Promise((r) => setTimeout(r, 3000));
      if (!cancelled) dispatch({ type: "FINISH_CHECKING" });
    };

    run();
    return () => { cancelled = true; };
  }, [ctx.step]); // eslint-disable-line react-hooks/exhaustive-deps

  const progress = useMemo(() => dkLawQuizProgress(ctx), [ctx]);

  const goBack = () => {
    setFieldErrors({});
    setOtpServerError(null);
    dispatch({ type: "BACK" });
  };

  const resetToStart = () => {
    setFieldErrors({});
    setOtpServerError(null);
    setSelectedInjuryTypes([]);
    dispatch({ type: "RESET" });
  };

  const sendOtp = async () => {
    setOtpSending(true);
    setOtpServerError(null);
    try {
      const res = await fetch("/.netlify/functions/send-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phone: ctx.data.phone_e164 || `+1${ctx.data.phone}` }),
      });
      const data = await res.json();
      if (!res.ok) {
        setOtpServerError(data?.error || "Could not send code. Please try again.");
        return;
      }
      trackOTPSent();
      dispatch({ type: "CONFIRM_CONTACT", ipAddress: data?.ipAddress || "" });
    } catch (err) {
      console.error("sendOtp error:", err);
      setOtpServerError("Network error. Please check your connection and try again.");
    } finally {
      setOtpSending(false);
    }
  };

  const resendOtp = async () => {
    setOtpSending(true);
    setOtpServerError(null);
    try {
      const res = await fetch("/.netlify/functions/send-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phone: ctx.data.phone_e164 || `+1${ctx.data.phone}` }),
      });
      const data = await res.json();
      if (!res.ok) {
        setOtpServerError(data?.error || "Could not resend code. Please try again.");
      }
    } catch (err) {
      console.error("resendOtp error:", err);
      setOtpServerError("Network error. Please try again.");
    } finally {
      setOtpSending(false);
    }
  };

  const verifyOtp = async () => {
    setOtpVerifying(true);
    setOtpServerError(null);
    try {
      const res = await fetch("/.netlify/functions/verify-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          phone: ctx.data.phone_e164 || `+1${ctx.data.phone}`,
          code: ctx.data.phone_otp,
        }),
      });
      const data = await res.json();

      if (!res.ok) {
        setOtpServerError(data?.error || "Verification failed. Please try again.");
        return;
      }
      if (!data?.approved) {
        setOtpServerError("That code doesn't match. Please check and try again.");
        return;
      }

      trackOTPVerified();
      dispatch({ type: "CONFIRM_OTP" });
    } catch (err) {
      console.error("verifyOtp error:", err);
      setOtpServerError("Network error. Please try again.");
    } finally {
      setOtpVerifying(false);
    }
  };

  const innerProps: InnerProps = {
    ctx,
    dispatch,
    fieldErrors,
    setFieldErrors,
    goBack,
    otpSending,
    otpVerifying,
    otpServerError,
    onSendOtp: sendOtp,
    onVerifyOtp: verifyOtp,
    onResendOtp: resendOtp,
    selectedInjuryTypes,
    setSelectedInjuryTypes,
  };

  const showProgress =
    ctx.step !== "welcome" &&
    ctx.step !== "good_news" &&
    ctx.step !== "checking" &&
    ctx.step !== "submitted";

  const title = getStepTitle(ctx.step);
  const subtitle = getStepSubtitle(ctx.step);

  let main: ReactNode;

  if (ctx.step === "welcome") {
    main = (
      <WelcomeHero
        onStart={() => {
          trackStepCompleted("welcome");
          dispatch({ type: "START_QUIZ" });
        }}
      />
    );
  } else if (ctx.step === "good_news") {
    /* ── "Good news" interstitial — M&M style: full-bleed photo bg, white card, yellow CTA ── */
    main = (
      <div
        className="relative flex min-h-[calc(100vh-56px)] flex-col items-center justify-center bg-gray-900 bg-cover bg-center px-4 py-12"
        style={{ backgroundImage: `url(${assets.heroCrashBg})` }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 w-full max-w-md rounded-2xl bg-white px-6 py-8 text-center shadow-2xl md:px-10 md:py-10">
          {/* Handshake icon */}
          <div className="mb-4 flex justify-center">
            <svg className="h-14 w-14" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16 28c4-4 8-6 14-6s10 4 14 6" stroke="#2563EB" strokeWidth="2.5" strokeLinecap="round" />
              <path d="M20 34l6 6 4-4 6 6" stroke="#2563EB" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M12 22l8 6" stroke="#2563EB" strokeWidth="2.5" strokeLinecap="round" />
              <path d="M52 22l-8 6" stroke="#2563EB" strokeWidth="2.5" strokeLinecap="round" />
            </svg>
          </div>

          <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 md:text-3xl">
            Good news — You may have a case!
          </h2>
          <p className="mx-auto mb-6 max-w-sm text-sm text-gray-500">
            Let&apos;s grab a few quick details so you can finish your sign-up and, if eligible, connect with a lawyer sooner.
          </p>
          <button
            type="button"
            onClick={() => {
              trackStepCompleted("good_news");
              dispatch({ type: "CONTINUE_GOOD_NEWS" });
            }}
            className="w-full rounded-full px-10 py-3.5 text-base font-bold text-gray-900 shadow-lg transition-all duration-200 hover:brightness-105 active:scale-[0.98]"
            style={{ backgroundColor: "#FBBF24" }}
          >
            Continue
          </button>
        </div>

        {/* Testimonial below card — M&M style: stars + quote */}
        <div className="relative z-10 mt-6 w-full max-w-md text-center">
          <div className="mb-2 flex items-center justify-center gap-1">
            {Array.from({ length: 5 }, (_, n) => (
              <Star key={n} className="h-5 w-5" style={{ fill: "#FBBF24", color: "#FBBF24" }} />
            ))}
          </div>
          <p className="text-lg font-bold leading-snug text-white">
            &ldquo;The company handled absolutely everything from start to finish.&rdquo;
          </p>
        </div>
      </div>
    );
  } else if (ctx.step === "checking") {
    main = (
      <div className="flex min-h-[50vh] flex-col items-center justify-center px-4 py-16">
        <div className="mb-6 flex justify-center">
          <div className="h-10 w-10 animate-spin rounded-full border-4 border-gray-200 border-t-blue-500" />
        </div>
        <h2 className="mb-2 text-center text-2xl font-bold tracking-tight text-gray-900">
          We&apos;re checking your case details now.
        </h2>
        <p className="text-center text-gray-500">
          This may take a minute, so please don&apos;t refresh the page.
        </p>
      </div>
    );
  } else if (ctx.step === "submitted") {
    const fn = ctx.data.first_name.trim();
    const phoneMask = formatPhoneMask(ctx.data.phone);
    main = (
      <div className="flex min-h-[50vh] flex-col items-center justify-center px-4 py-16">
        <div className="mb-5 flex justify-center">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-green-100">
            <Check className="h-7 w-7 text-green-600" aria-hidden />
          </div>
        </div>
        <h2 className="mb-2 text-center text-[2rem] font-bold leading-tight tracking-tight text-gray-900">
          {fn ? `${fn}, you may qualify!` : "You may qualify!"}
        </h2>
        <p className="mx-auto max-w-lg text-center text-gray-500">
          A DK Law specialist is reviewing your case now. Expect a call at {phoneMask} within the next 15 minutes.
        </p>
        {submitState === "error" ? (
          <p className="mt-4 text-center text-xs text-red-500">
            (We had trouble saving your submission — please call (800) 719-9779 if you don&apos;t hear from us in 24 hours.)
          </p>
        ) : null}
      </div>
    );
  } else {
    main = (
      <FunnelCard title={title} description={subtitle}>
        {renderQuizFields(innerProps)}
      </FunnelCard>
    );
  }

  // Back arrow for quiz steps (M&M places it above the progress bar)
  const showBackArrow =
    ctx.step !== "welcome" &&
    ctx.step !== "good_news" &&
    ctx.step !== "checking" &&
    ctx.step !== "submitted";

  // Welcome & good_news get their own full-bleed layout
  if (ctx.step === "welcome" || ctx.step === "good_news") {
    return (
      <div className="min-h-screen bg-white">
        <Header onLogoClick={resetToStart} />
        {main}
        <input type="hidden" id="xxTrustedFormCertUrl" name="xxTrustedFormCertUrl" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Header onLogoClick={resetToStart} />
      <div className="flex flex-col items-center justify-start px-4 py-6 md:py-12">
        <div className="w-full max-w-lg">
          {showBackArrow ? (
            <div className="mb-1 flex items-center gap-3">
              <button
                type="button"
                onClick={goBack}
                className="flex items-center gap-1 text-gray-400 transition-colors hover:text-gray-700"
                aria-label="Go back"
              >
                <ArrowLeft className="h-4 w-4" />
              </button>
            </div>
          ) : null}
          {showProgress ? <ProgressBar current={progress.current} total={progress.total} /> : null}
          {main}
        </div>
      </div>
      <input type="hidden" id="xxTrustedFormCertUrl" name="xxTrustedFormCertUrl" />
    </div>
  );
}
