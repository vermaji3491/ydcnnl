import { apiFetch } from "./api";

export function adminApiFetch(path, options = {}) {
  const token = localStorage.getItem("adminToken") || sessionStorage.getItem("adminToken");
  if (!token) {
    const error = new Error("Your admin session has expired. Please sign in again.");
    error.status = 401;
    throw error;
  }

  const headers = new Headers(options.headers);
  headers.set("Authorization", `Bearer ${token}`);
  let body = options.body;

  if (body != null && !(body instanceof FormData) && typeof body !== "string") {
    headers.set("Content-Type", "application/json");
    body = JSON.stringify(body);
  }

  return apiFetch(path, { ...options, headers, body });
}