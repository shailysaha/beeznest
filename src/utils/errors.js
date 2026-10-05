const FRIENDLY_ERRORS = {
  INVALID_CREDENTIALS: "The phone/email or password is incorrect.",

  PHONE_ALREADY_EXISTS: "This phone number is already registered.",

  EMAIL_ALREADY_EXISTS: "This email is already registered.",

  INVALID_OTP: "The verification code is incorrect.",

  OTP_EXPIRED: "This code has expired. Please request a new one.",

  TOO_MANY_ATTEMPTS: "Too many attempts. Please try again later.",

  // A few extras you will almost certainly hit
  USER_NOT_FOUND: "We couldn't find an account with those details.",
  WEAK_PASSWORD: "Please choose a stronger password.",
  NETWORK_ERROR: "Network problem. Please check your connection and try again.",
  SERVER_ERROR: "Something went wrong on our side. Please try again shortly.",
  VALIDATION_ERROR: "Please check the highlighted fields and try again.",
};

export function getFriendlyError(message) {
  if (!message) return "Something went wrong. Please try again.";

  // Backend may return either a code ("INVALID_CREDENTIALS")
  // or a string. Normalize to a code-ish key.
  const key = String(message).trim().toUpperCase().replace(/\s+/g, "_");

  return (
    FRIENDLY_ERRORS[key] ||
    FRIENDLY_ERRORS[String(message).trim()] ||
    "Something went wrong. Please try again."
  );
}

export default getFriendlyError;