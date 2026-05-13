/** Quiz step keys — mirrors Morgan & Morgan flow with DK Law OTP. */
export type FunnelStep =
  | "welcome"
  | "injury"
  | "at_fault"
  | "good_news"
  | "injury_type"
  | "accident_how"
  | "incident_date"
  | "contact"
  | "phone_otp"
  | "checking"
  | "submitted";

export type InjurySeverity = "none" | "minor" | "significant" | "severe";

export type MedicalReceivedOption = "within_30" | "after_30" | "not_yet";

export type IncidentDateView = "presets" | "year" | "month" | "day";

/** At-fault values aligned with original quiz payload. */
export type AtFaultValue = "No" | "Not sure" | "Yes_Passenger" | "Yes" | "";

export type FunnelData = {
  accident_type: string;
  state: string;
  injury_severity: InjurySeverity | "";
  injury_types: string[];
  accident_how: string;
  first_name: string;
  last_name: string;
  first_name_cleaned: string;
  last_name_cleaned: string;
  at_fault: AtFaultValue;
  incident_days_ago: number | null;
  incident_date_label: string;
  incident_year: number | null;
  incident_month: number | null;
  incident_day: number | null;
  incident_date_custom: boolean;
  medical_received: MedicalReceivedOption | "";
  represented: "Yes" | "No" | "";
  case_description: string;
  email: string;
  phone_raw: string;
  phone_normalized_10_digits: string;
  phone_e164: string;
  phone: string;
  phone_otp: string;
  ip_address: string;
  otp_verified: boolean;
  consent_timestamp: string;
  consent_text: string;
};

export type FunnelFlags = {
  no_injury_dq: boolean;
  at_fault_dq: boolean;
  incident_date_dq: boolean;
};

export type FunnelContext = {
  step: FunnelStep;
  data: FunnelData;
  flags: FunnelFlags;
};

export type FunnelAction =
  | { type: "START_QUIZ" }
  | { type: "PATCH_DATA"; patch: Partial<FunnelData> }
  | { type: "SELECT_ACCIDENT"; accidentType: string }
  | { type: "SELECT_INJURY"; injured: boolean }
  | { type: "SELECT_INJURY_TYPES"; types: string[] }
  | { type: "SELECT_ACCIDENT_HOW"; value: string }
  | { type: "SELECT_INCIDENT_PRESET"; daysAgo: number; label: string }
  | { type: "SELECT_AT_FAULT"; value: AtFaultValue }
  | { type: "CONTINUE_GOOD_NEWS" }
  | { type: "CONFIRM_CONTACT"; ipAddress?: string }
  | { type: "CONFIRM_OTP" }
  | { type: "FINISH_CHECKING" }
  | { type: "BACK" }
  | { type: "RESET" };
