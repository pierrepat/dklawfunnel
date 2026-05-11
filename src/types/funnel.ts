/** Quiz step keys for the DK Law funnel — optimized for conversion. */
export type FunnelStep =
  | "welcome"
  | "injury"
  | "incident_date"
  | "at_fault"
  | "contact"
  | "phone_otp"
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
  /** Captured server-side when OTP is sent. */
  ip_address: string;
  /** Set true after Twilio Verify approves the code. */
  otp_verified: boolean;
  /** TCPA consent timestamp (ISO) — captured at phone submit. */
  consent_timestamp: string;
  /** TCPA consent text the user agreed to. */
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
  | { type: "PATCH_DATA"; patch: Partial<FunnelData> }
  | { type: "SELECT_ACCIDENT"; accidentType: string }
  | { type: "SELECT_INJURY"; injured: boolean }
  | { type: "SELECT_INCIDENT_PRESET"; daysAgo: number; label: string }
  | { type: "SELECT_AT_FAULT"; value: AtFaultValue }
  | { type: "CONFIRM_CONTACT"; ipAddress?: string }
  | { type: "CONFIRM_OTP" }
  | { type: "BACK" };
