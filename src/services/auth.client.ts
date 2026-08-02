import { browserClient } from "@/lib/browser-client";
import { LoginFormValues } from "@/schemas/auth.schema";

export const login = async (payload: LoginFormValues) => {
  const data = await browserClient("/api/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify(payload),
  });

  return data;
};
