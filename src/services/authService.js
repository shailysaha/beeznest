// src/services/authService.js
import { API_ENDPOINTS } from "../config/api";
import { apiRequest } from "./api";

// ⚠️ TEMPORARY MOCKS — remove when backend is running
const USE_MOCKS = true;
const wait = (ms) => new Promise((r) => setTimeout(r, ms));

/* ---------------- SIGNUP + AUTH ---------------- */

export async function signupUser(userData) {
  if (USE_MOCKS) {
    await wait(600);
    console.log("[MOCK] signupUser", userData);
    return {
      token: "mock_token",
      user: { id: "u_1", name: userData.name, email: userData.email },
    };
  }
  return apiRequest(API_ENDPOINTS.signup, {
    method: "POST",
    body: JSON.stringify(userData),
  });
}

export async function loginUser(credentials) {
  if (USE_MOCKS) {
    await wait(500);
    return {
      token: "mock_token",
      user: { id: "u_1", name: "Test", email: credentials.identifier },
    };
  }
  return apiRequest(API_ENDPOINTS.login, {
    method: "POST",
    body: JSON.stringify(credentials),
  });
}

/* ---------------- OTP (SIGNUP) ---------------- */

export async function sendOtp(phone) {
  if (USE_MOCKS) {
    await wait(500);
    console.log("[MOCK] OTP sent to", phone, "— use 123456");
    return { success: true };
  }
  return apiRequest(API_ENDPOINTS.sendOtp, {
    method: "POST",
    body: JSON.stringify({ phone }),
  });
}

export async function verifyOtp(phone, otp) {
  if (USE_MOCKS) {
    await wait(500);
    if (otp !== "123456") throw new Error("INVALID_OTP");
    return { success: true };
  }
  return apiRequest(API_ENDPOINTS.verifyOtp, {
    method: "POST",
    body: JSON.stringify({ phone, otp }),
  });
}

/* ---------------- PASSWORD RESET ---------------- */

export async function forgotPassword(identifier) {
  if (USE_MOCKS) {
    await wait(500);
    console.log("[MOCK] forgotPassword for", identifier, "— use code 123456");
    return { success: true };
  }
  return apiRequest(API_ENDPOINTS.forgotPassword, {
    method: "POST",
    body: JSON.stringify({ identifier }),
  });
}

export async function verifyResetOtp(identifier, otp) {
  if (USE_MOCKS) {
    await wait(500);
    if (otp !== "123456") throw new Error("INVALID_OTP");
    return { success: true };
  }
  return apiRequest(API_ENDPOINTS.verifyResetOtp, {
    method: "POST",
    body: JSON.stringify({ identifier, otp }),
  });
}

export async function resetPassword(identifier, otp, password) {
  if (USE_MOCKS) {
    await wait(500);
    console.log("[MOCK] resetPassword for", identifier);
    return { success: true };
  }
  return apiRequest(API_ENDPOINTS.resetPassword, {
    method: "POST",
    body: JSON.stringify({ identifier, otp, password }),
  });
}