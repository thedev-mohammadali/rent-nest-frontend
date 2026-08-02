import "server-only";

import { ApiError } from "@/lib/api-error";
import { serverClient } from "@/lib/server-client";
import { AuthResponse, User } from "@/types/auth";

export const getCurrentUser = async (): Promise<User | null> => {
  try {
    const result: AuthResponse = await serverClient("/auth/me");

    return result.data;
  } catch (error) {
    if (error instanceof ApiError && error.statusCode === 401) {
      return null;
    }

    throw error;
  }
};
