import "server-only";

import { ApiError } from "@/lib/api-error";
import { env } from "@/lib/env";
import { cookies } from "next/headers";

const API_URL = env.apiUrl;

export const serverClient = async <T>(
  endpoint: string,
  options?: RequestInit,
): Promise<T> => {
  const cookieStore = await cookies();

  const cookieHeader = cookieStore.toString();

  const response = await fetch(`${API_URL}${endpoint}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers,
      Cookie: cookieHeader,
    },
    cache: options?.cache,
    next: options?.next,
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
