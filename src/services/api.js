import { API_BASE_URL } from "../config/api";

export async function apiRequest(endpoint, options = {}) {
  let response;

  try {
    response = await fetch(`${API_BASE_URL}${endpoint}`, {
      headers: {
        "Content-Type": "application/json",
        ...(options.headers || {}),
      },
      ...options,
    });
  } catch {
    // Network / DNS / offline — fetch itself threw
    throw new Error("NETWORK_ERROR");
  }

  let data = {};

  try {
    data = await response.json();
  } catch {
    data = {};
  }

  if (!response.ok) {
    
    const code =
      data.code ||
      data.errorCode ||
      data.message ||
      (response.status >= 500
        ? "SERVER_ERROR"
        : response.status === 429
        ? "TOO_MANY_ATTEMPTS"
        : "VALIDATION_ERROR");

    throw new Error(String(code));
  }

  return data;
}