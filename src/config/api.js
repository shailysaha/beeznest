export const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || "http://localhost:5000/api";

export const API_ENDPOINTS = {
  signup: "/auth/signup",
  login: "/auth/login",

  sendOtp: "/auth/send-otp",
  verifyOtp: "/auth/verify-otp",

  forgotPassword: "/auth/forgot-password",
  verifyResetOtp: "/auth/verify-reset-otp",
  resetPassword: "/auth/reset-password",

  googleLogin: "/auth/google",
};