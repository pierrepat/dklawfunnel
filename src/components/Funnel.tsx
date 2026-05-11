import { Bike, Car, Check, Lock, ShieldCheck, Smartphone, Truck } from "lucide-react";
import { useEffect, useMemo, useReducer, useState, type Dispatch, type ReactNode, type SetStateAction } from "react";
import {
  ACCIDENT_TYPE_OPTIONS,
  INCIDENT_PRESETS,
  dkLawQuizProgress,
  funnelReducer,
  getStepSubtitle,
  getStepTitle,
  initialDkLawContext,
} from "../data/funnelConfig";
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

const ACCIDENT_TYPE_ICONS = [
  { label: ACCIDENT_TYPE_OPTIONS[0], Icon: Car },
  { label: ACCIDENT_TYPE_OPTIONS[1], Icon: Truck },
  { label: ACCIDENT_TYPE_OPTIONS[2], Icon: Smartphone },
  { label: ACCIDENT_TYPE_OPTIONS[3], Icon: Bike },
] as const;

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
};

function renderQuizFields(p: InnerProps) {
  const {
    ctx, dispatch, fieldErrors, setFieldErrors, goBack,
    otpSending, otpVerifying, otpServerError, onSendOtp, onVerifyOtp, onResendOtp,
  } = p;

  switch (ctx.step) {
    case "welcome":
      return (
        <>
          {ACCIDENT_TYPE_ICONS.map(({ label, Icon }) => (
            <OptionButton
              key={label}
              label={label}
              icon={<Icon size={22} className="shrink-0" />}
              highlightSelected={false}
              onClick={() => {
                trackStepCompleted("welcome");
                dispatch({ type: "SELECT_ACCIDENT", accidentType: label });
              }}
            />
          ))}
        </>
      );

    case "injury":
      return (
        <>
          <OptionButton
            label="Yes, I was injured"
            highlightSelected={false}
            onClick={() => {
              trackStepCompleted("injury");
              dispatch({ type: "SELECT_INJURY", injured: true });
            }}
          />
          <OptionButton
            label="No injuries"
            highlightSelected={false}
            onClick={() => {
              trackStepCompleted("injury");
              dispatch({ type: "SELECT_INJURY", injured: false });
            }}
          />
          <NavigationButtons showBack onBack={goBack} />
        </>
      );

    case "incident_date":
      return (
        <>
          {INCIDENT_PRESETS.map((preset) => (
            <OptionButton
              key={preset.label}
              label={preset.label}
              highlightSelected={false}
              onClick={() => {
                trackStepCompleted("incident_date");
                dispatch({ type: "SELECT_INCIDENT_PRESET", daysAgo: preset.daysAgo, label: preset.label });
              }}
            />
          ))}
          <NavigationButtons showBack onBack={goBack} />
        </>
      );

    case "at_fault":
      return (
        <>
          <OptionButton
            label="The other driver hit me"
            highlightSelected={false}
            onClick={() => {
              trackStepCompleted("at_fault");
              dispatch({ type: "SELECT_AT_FAULT", value: "No" });
            }}
          />
          <OptionButton
            label="I was a passenger"
            highlightSelected={false}
            onClick={() => {
              trackStepCompleted("at_fault");
              dispatch({ type: "SELECT_AT_FAULT", value: "Yes_Passenger" });
            }}
          />
          <OptionButton
            label="It was my fault"
            highlightSelected={false}
            onClick={() => {
              trackStepCompleted("at_fault");
              dispatch({ type: "SELECT_AT_FAULT", value: "Yes" });
            }}
          />
          <OptionButton
            label="I'm not sure"
            highlightSelected={false}
            onClick={() => {
              trackStepCompleted("at_fault");
              dispatch({ type: "SELECT_AT_FAULT", value: "Not sure" });
            }}
          />
          <NavigationButtons showBack onBack={goBack} />
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
              <input
                type="text"
                name="given-name"
                autoComplete="given-name"
                value={ctx.data.first_name}
                onChange={(e) => dispatch({ type: "PATCH_DATA", patch: { first_name: e.target.value } })}
                maxLength={100}
                placeholder="First name"
                className="w-full rounded-lg border-2 border-border bg-card p-4 text-foreground transition-colors focus:border-primary focus:outline-none"
              />
              {(fieldErrors.first_name || firstNameError || namesDistinctError) ? (
                <p className="mt-1 text-sm text-destructive">
                  {fieldErrors.first_name ?? firstNameError ?? namesDistinctError}
                </p>
              ) : null}
            </div>
            <div>
              <input
                type="text"
                name="family-name"
                autoComplete="family-name"
                value={ctx.data.last_name}
                onChange={(e) => dispatch({ type: "PATCH_DATA", patch: { last_name: e.target.value } })}
                maxLength={100}
                placeholder="Last name"
                className="w-full rounded-lg border-2 border-border bg-card p-4 text-foreground transition-colors focus:border-primary focus:outline-none"
              />
              {(fieldErrors.last_name || lastNameError) ? (
                <p className="mt-1 text-sm text-destructive">{fieldErrors.last_name ?? lastNameError}</p>
              ) : null}
            </div>
          </div>

          {/* Phone */}
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
            className="w-full rounded-lg border-2 border-border bg-card p-4 text-foreground tabular-nums transition-colors focus:border-primary focus:outline-none"
          />
          {phoneTouched && (fieldErrors.phone || phoneError) ? (
            <p className="text-sm text-destructive">{fieldErrors.phone ?? phoneError}</p>
          ) : null}
          <p className="text-xs text-muted-foreground">
            So our legal team can reach you about your case — usually within 15 minutes.
          </p>

          {/* Email (optional) */}
          <input
            type="email"
            name="email"
            autoComplete="email"
            value={ctx.data.email}
            onChange={(e) => dispatch({ type: "PATCH_DATA", patch: { email: e.target.value } })}
            maxLength={255}
            placeholder="Email (optional)"
            className="w-full rounded-lg border-2 border-border bg-card p-4 text-foreground transition-colors focus:border-primary focus:outline-none"
          />
          {fieldErrors.email ? <p className="text-sm text-destructive">{fieldErrors.email}</p> : null}

          {otpServerError ? (
            <p className="text-sm text-destructive">{otpServerError}</p>
          ) : null}

          {/* TCPA consent */}
          <p className="text-xs text-muted-foreground" data-tf-element-role="consent-description">
            By clicking &apos;See If I Qualify&apos;, you agree to our Privacy Policy and consent to receive calls and text messages
            from DK Law and its partners at the phone number provided, including via automated technology, regarding your
            potential claim. Consent is not a condition of any purchase. Message and data rates may apply.
          </p>

          <NavigationButtons
            showBack
            onBack={goBack}
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
            nextLabel={otpSending ? "Sending..." : "See If I Qualify"}
            nextDisabled={!allValid || otpSending}
            consentGrantor
          />

          {/* Trust signals */}
          <div className="flex items-center justify-center gap-5 pt-2 text-xs text-muted-foreground">
            <span className="flex items-center gap-1">
              <Lock size={12} className="text-primary" aria-hidden />
              Encrypted
            </span>
            <span className="flex items-center gap-1">
              <ShieldCheck size={12} className="text-primary" aria-hidden />
              No spam, ever
            </span>
          </div>
        </>
      );
    }

    case "phone_otp": {
      const masked = formatPhoneMask(ctx.data.phone);
      return (
        <>
          <p className="mb-4 text-sm text-muted-foreground">
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
            className="w-full rounded-lg border-2 border-border bg-card p-4 text-center text-xl tabular-nums tracking-widest text-foreground transition-colors focus:border-primary focus:outline-none"
          />
          {fieldErrors.phone_otp ? (
            <p className="mt-2 text-sm text-destructive">{fieldErrors.phone_otp}</p>
          ) : null}
          {otpServerError ? (
            <p className="mt-2 text-sm text-destructive">{otpServerError}</p>
          ) : null}
          <button
            type="button"
            disabled={otpSending}
            className="mt-4 text-sm font-medium text-primary underline-offset-4 hover:underline disabled:opacity-50"
            onClick={onResendOtp}
          >
            {otpSending ? "Resending..." : "Resend code"}
          </button>
          <NavigationButtons
            showBack
            onBack={goBack}
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

  useEffect(() => {
    captureUTMs();
    trackQuizStarted();
  }, []);

  const progress = useMemo(() => dkLawQuizProgress(ctx), [ctx]);

  const goBack = () => {
    setFieldErrors({});
    setOtpServerError(null);
    dispatch({ type: "BACK" });
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
      setSubmitState("submitting");
      try {
        await submitLead({
          answers: { ...ctx.data, otp_verified: true },
        });
        trackLeadSubmitted({
          email: ctx.data.email,
          state: ctx.data.state,
          injurySeverity: ctx.data.injury_severity,
          represented: ctx.data.represented,
        });
        setSubmitState("success");
      } catch (err) {
        console.error("submitLead error:", err);
        const errorMsg = err instanceof Error ? err.message : "Unknown error";
        trackLeadSubmissionFailed(errorMsg);
        setSubmitState("error");
      }
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
  };

  const showProgress = ctx.step !== "welcome" && ctx.step !== "submitted";

  const title = getStepTitle(ctx.step);
  const subtitle = getStepSubtitle(ctx.step);

  let main: ReactNode;

  if (ctx.step === "submitted") {
    const fn = ctx.data.first_name.trim();
    const phoneMask = formatPhoneMask(ctx.data.phone);
    main = (
      <div className="mx-auto w-full max-w-xl rounded-xl border border-border bg-card p-8 text-center shadow-card">
        <div className="mb-5 flex justify-center">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
            <Check className="h-7 w-7 text-primary" aria-hidden />
          </div>
        </div>
        <h2 className="mb-2 text-[2rem] font-bold leading-tight tracking-tight text-foreground">
          {fn ? `${fn}, you may qualify!` : "You may qualify!"}
        </h2>
        <p className="mx-auto max-w-lg text-muted-foreground">
          A DK Law specialist is reviewing your case now. Expect a call at {phoneMask} within the next 15 minutes.
        </p>
        {submitState === "error" ? (
          <p className="mt-4 text-xs text-destructive">
            (We had trouble saving your submission — please call (714) 294-2224 if you don&apos;t hear from us in 24 hours.)
          </p>
        ) : null}
      </div>
    );
  } else if (ctx.step === "welcome") {
    main = (
      <>
        <WelcomeHero />
        <FunnelCard title={title}>{renderQuizFields(innerProps)}</FunnelCard>
      </>
    );
  } else {
    main = (
      <FunnelCard title={title} description={subtitle}>
        {renderQuizFields(innerProps)}
      </FunnelCard>
    );
  }

  return (
    <>
      <Header />
      <div className="flex flex-col items-center justify-start px-4 py-8 md:py-16">
        <div className="w-full max-w-xl">
          {showProgress ? <ProgressBar current={progress.current} total={progress.total} /> : null}
          {main}
        </div>
      </div>
      {/* TrustedForm hidden field — populated by trustedform.js */}
      <input type="hidden" id="xxTrustedFormCertUrl" name="xxTrustedFormCertUrl" />
    </>
  );
}
