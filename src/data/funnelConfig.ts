import type {
  FunnelAction,
  FunnelContext,
  FunnelData,
  FunnelStep,
} from "../types/funnel";

const OTP_ENABLED = import.meta.env.VITE_ENABLE_OTP !== "false";

/** Injury-type options (multi-select, mirrors M&M). */
export const INJURY_TYPE_OPTIONS: string[] = [
  "Neck, back, knee, or shoulder injury",
  "Broken bones",
  "Severe injury / death",
  "Other",
];

/** How-did-it-happen options (mirrors M&M). */
export const ACCIDENT_HOW_OPTIONS: string[] = [
  "I was rear-ended",
  "The other party failed to yield",
  "The other party violated the rules of the road",
  "Other",
];

/**
 * Incident-date presets — split at 2 years per DK Law criteria.
 */
export const INCIDENT_PRESETS: { label: string; daysAgo: number }[] = [
  { label: "Within the last week", daysAgo: 7 },
  { label: "Within the last month", daysAgo: 30 },
  { label: "Within 6 months", daysAgo: 180 },
  { label: "Within 1 year", daysAgo: 365 },
  { label: "1–2 years ago", daysAgo: 730 },
  { label: "Over 2 years ago", daysAgo: 1095 },
];

export const CASE_DESCRIPTION_MAX = 2000;
export const CASE_DESCRIPTION_MIN = 34;

export const CASE_PLACEHOLDER =
  "Yesterday I was stopped at a red light when another driver rear ended me. I have some neck pain since. I saw a doctor the next day";

/**
 * Progress — quiz steps only (excludes welcome, good_news, checking, submitted).
 * 6 quiz steps → percentage shown in progress bar.
 */
const PROGRESS_BY_STEP: Record<FunnelStep, number> = {
  welcome: 0,
  injury: 1,
  at_fault: 2,
  good_news: 2,
  injury_type: 3,
  accident_how: 4,
  incident_date: 5,
  contact: 6,
  phone_otp: 6,
  checking: 6,
  submitted: 6,
};

export const QUIZ_PROGRESS_TOTAL = 6;

export function dkLawQuizProgress(ctx: FunnelContext): { current: number; total: number } {
  return { current: PROGRESS_BY_STEP[ctx.step], total: QUIZ_PROGRESS_TOTAL };
}

const TITLES: Partial<Record<FunnelStep, string>> = {
  injury: "Were you injured?",
  at_fault: "Who was at fault?",
  injury_type: "Which of the following best describes your injuries?",
  accident_how: "How did the accident happen?",
  incident_date: "When did your accident happen?",
  contact: "Personal details, please",
  phone_otp: "Verify your phone number",
};

const SUBTITLES: Partial<Record<FunnelStep, string>> = {
  injury_type: "Select all that apply",
  contact: "A legal specialist will call you — usually within 15 minutes",
  phone_otp: "We sent a 6-digit code to verify your number",
};

export function getStepTitle(step: FunnelStep): string {
  return TITLES[step] ?? step;
}

export function getStepSubtitle(step: FunnelStep): string | undefined {
  return SUBTITLES[step];
}

export type PrequalifyBullet = { title: string; description: string };

export const initialFunnelData: FunnelData = {
  accident_type: "Car Accident",
  state: "California",
  injury_severity: "",
  injury_types: [],
  accident_how: "",
  first_name: "",
  last_name: "",
  first_name_cleaned: "",
  last_name_cleaned: "",
  at_fault: "",
  incident_days_ago: null,
  incident_date_label: "",
  incident_year: null,
  incident_month: null,
  incident_day: null,
  incident_date_custom: false,
  medical_received: "",
  represented: "",
  case_description: "",
  email: "",
  phone_raw: "",
  phone_normalized_10_digits: "",
  phone_e164: "",
  phone: "",
  phone_otp: "",
  ip_address: "",
  otp_verified: false,
  consent_timestamp: "",
  consent_text: "",
};

export const initialDkLawContext: FunnelContext = {
  step: "welcome",
  data: { ...initialFunnelData },
  flags: { no_injury_dq: false, at_fault_dq: false, incident_date_dq: false },
};

export function funnelReducer(state: FunnelContext, action: FunnelAction): FunnelContext {
  switch (action.type) {
    case "START_QUIZ":
      return { ...state, step: "injury" };

    case "PATCH_DATA":
      return {
        ...state,
        data: { ...state.data, ...action.patch },
      };

    case "SELECT_INJURY": {
      if (!action.injured) {
        return {
          ...state,
          data: { ...state.data, injury_severity: "none" },
          flags: { ...state.flags, no_injury_dq: true },
          step: "at_fault",
        };
      }
      return {
        ...state,
        data: { ...state.data, injury_severity: "significant" },
        flags: { ...state.flags, no_injury_dq: false },
        step: "at_fault",
      };
    }

    case "SELECT_AT_FAULT": {
      const flags = { ...state.flags };
      if (action.value === "Yes") flags.at_fault_dq = true;

      return {
        ...state,
        data: { ...state.data, at_fault: action.value },
        flags,
        step: "good_news",
      };
    }

    case "CONTINUE_GOOD_NEWS":
      return { ...state, step: "injury_type" };

    case "SELECT_INJURY_TYPES":
      return {
        ...state,
        data: { ...state.data, injury_types: action.types },
        step: "accident_how",
      };

    case "SELECT_ACCIDENT_HOW":
      return {
        ...state,
        data: { ...state.data, accident_how: action.value },
        step: "incident_date",
      };

    case "SELECT_ACCIDENT":
      return {
        ...state,
        data: { ...state.data, accident_type: action.accidentType },
        step: "incident_date",
      };

    case "SELECT_INCIDENT_PRESET": {
      const flags = { ...state.flags };
      if (action.daysAgo > 730) flags.incident_date_dq = true;

      return {
        ...state,
        data: {
          ...state.data,
          incident_days_ago: action.daysAgo,
          incident_date_label: action.label,
        },
        flags,
        step: "contact",
      };
    }

    case "CONFIRM_CONTACT": {
      const consent_text =
        "By clicking 'See If I Qualify', I agree to the Privacy Policy and consent to receive calls and text messages from DK Law and its partners at the phone number provided, including via automated technology, regarding my potential claim. Consent is not a condition of any purchase. Message and data rates may apply.";
      const dataPatch = {
        phone_otp: "",
        ip_address: action.ipAddress ?? state.data.ip_address,
        consent_timestamp: new Date().toISOString(),
        consent_text,
      };
      if (OTP_ENABLED) {
        return { ...state, step: "phone_otp", data: { ...state.data, ...dataPatch } };
      }
      return {
        ...state,
        step: "checking",
        data: { ...state.data, ...dataPatch, otp_verified: false },
      };
    }

    case "CONFIRM_OTP":
      return {
        ...state,
        step: "checking",
        data: { ...state.data, otp_verified: true },
      };

    case "FINISH_CHECKING":
      return { ...state, step: "submitted" };

    case "BACK": {
      const { step } = state;
      switch (step) {
        case "phone_otp":
          return { ...state, step: "contact" };
        case "contact":
          return { ...state, step: "incident_date" };
        case "incident_date":
          return { ...state, step: "accident_how" };
        case "accident_how":
          return { ...state, step: "injury_type" };
        case "injury_type":
          return { ...state, step: "good_news" };
        case "good_news":
          return { ...state, step: "at_fault" };
        case "at_fault":
          return { ...state, step: "injury" };
        case "injury":
          return { ...state, step: "welcome" };
        default:
          return state;
      }
    }

    case "RESET":
      return { ...initialDkLawContext, data: { ...initialFunnelData } };

    default:
      return state;
  }
}

/** Exported for tests / tooling — canonical step order. */
export function listFunnelSteps(): FunnelStep[] {
  return [
    "welcome",
    "injury",
    "at_fault",
    "good_news",
    "injury_type",
    "accident_how",
    "incident_date",
    "contact",
    "phone_otp",
    "checking",
    "submitted",
  ];
}
