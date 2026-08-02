import { ApiError } from "./api-error";

export const browserClient = async <T>(
  endpoint: string,
  options?: RequestInit,
): Promise<T> => {
  const response = await fetch(endpoint, {
    ...options,
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
      ...options?.headers,
    },
  });

  if (!response.ok) {
    let message = "Something went wrong";

    try {
      const errorData = await response.json();

      message = errorData.message ?? message;
    } catch {}

    throw new ApiError(message, response.status);
  }

  return response.json();
};
