const apiBaseUrl = (import.meta.env.VITE_API_URL || "").replace(/\/+$/, "");

export const apiUrl = (path) =>
  `${apiBaseUrl}${path.startsWith("/") ? path : `/${path}`}`;

export async function apiFetch(path, options) {
  const response = await fetch(apiUrl(path), options);
  const result = await response.json().catch(() => ({}));

  if (!response.ok) {
    const error = new Error(result.message || "The request could not be completed.");
    error.status = response.status;
    throw error;
  }

  return result;
}