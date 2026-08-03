"use server";

import { serverClient } from "@/lib/server-client";
import { PaymentResponse } from "@/types/dashboard";

export const createCheckoutSession = async (
  agreementId: string,
): Promise<PaymentResponse> => {
  return serverClient(`/payments/rental-agreements/${agreementId}/checkout`, {
    method: "POST",
  });
};
