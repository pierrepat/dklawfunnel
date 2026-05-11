/** Field-level validation (DK funnel replica — no remote phone API). */

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const NAME_ALLOWED_RE = /^[A-Za-z' -]+$/;
const NAME_BLACKLIST = new Set(["test", "qwerty", "asdf", "fake", "name", "aaa", "bbb"]);

export function validateEmail(value: string): string | null {
  const t = value.trim();
  if (!t) return "Please enter an email";
  if (!EMAIL_RE.test(t)) return "Please enter a valid email";
  return null;
}

export function isLikelyGibberishName(value: string): boolean {
  const cleaned = value.trim().toLowerCase();
  if (!cleaned) return true;
  const lettersOnly = cleaned.replace(/[^a-z]/g, "");
  if (!lettersOnly) return true;
  if (NAME_BLACKLIST.has(lettersOnly)) return true;
  if (/^(.)\1{2,}$/.test(lettersOnly)) return true;
  if (lettersOnly.length >= 3) {
    const uniqueChars = new Set(lettersOnly.split(""));
    if (uniqueChars.size <= 2 && lettersOnly.length >= 4) return true;
  }
  return false;
}

export function cleanName(value: string): string {
  return value.trim().replace(/\s+/g, " ");
}

export function validateName(value: string, fieldLabel: string): string | null {
  const cleaned = cleanName(value);
  const label = fieldLabel.toLowerCase();
  const isFirst = label.includes("first");
  const minLengthError = isFirst
    ? "First name must be at least 3 letters."
    : "Last name must be at least 3 letters.";
  const realNameError = isFirst ? "Please enter a real first name." : "Please enter a real last name.";

  const lettersCount = cleaned.replace(/[^A-Za-z]/g, "").length;
  if (lettersCount < 3) return minLengthError;
  if (!NAME_ALLOWED_RE.test(cleaned)) return realNameError;
  if (/\d/.test(cleaned)) return realNameError;
  if (isFirst && /\s/.test(cleaned)) return realNameError;
  if (isLikelyGibberishName(cleaned)) return realNameError;
  if (/^john doe$/i.test(cleaned)) return realNameError;
  return null;
}

export function validateNamesDistinct(first: string, last: string): string | null {
  const f = cleanName(first).toLowerCase();
  const l = cleanName(last).toLowerCase();
  if (f && l && f === l) return "First and last name cannot be the same";
  return null;
}

export function normalizeUsPhoneToTenDigits(value: string): string {
  const digits = value.replace(/\D/g, "");
  if (digits.length === 11 && digits.startsWith("1")) return digits.slice(1);
  if (digits.length === 10) return digits;
  return "";
}

export function validateUsPhone(value: string): string | null {
  // TODO: Replace local phone validation with Twilio Lookup / carrier line type check to confirm mobile/cellular numbers before production.
  const n10 = normalizeUsPhoneToTenDigits(value);
  if (!n10) return "Please enter a valid US mobile phone number.";
  if (/^(\d)\1{9}$/.test(n10)) return "Please enter a valid US mobile phone number.";
  if (n10 === "1234567890") return "Please enter a valid US mobile phone number.";
  const area = n10.slice(0, 3);
  const central = n10.slice(3, 6);
  const line = n10.slice(6, 10);
  if (area.startsWith("0") || area.startsWith("1")) return "Please enter a valid US mobile phone number.";
  if (central.startsWith("0") || central.startsWith("1")) return "Please enter a valid US mobile phone number.";
  if (central === "555") {
    const lineNum = Number(line);
    if (lineNum >= 100 && lineNum <= 199) return "Please enter a valid US mobile phone number.";
  }
  return null;
}

export function formatPhoneMask(digits: string): string {
  const rawDigits = digits.replace(/\D/g, "");
  const d =
    rawDigits.length === 11 && rawDigits.startsWith("1")
      ? rawDigits.slice(1)
      : rawDigits.slice(0, 10);
  if (!d) return "";
  if (d.length < 4) return `(${d}`;
  if (d.length < 7) return `(${d.slice(0, 3)}) ${d.slice(3)}`;
  return `(${d.slice(0, 3)}) ${d.slice(3, 6)}-${d.slice(6, 10)}`;
}

export function validateOtpSix(value: string): string | null {
  if (!/^\d{6}$/.test(value.trim())) return "Please enter the 6-digit code";
  return null;
}
