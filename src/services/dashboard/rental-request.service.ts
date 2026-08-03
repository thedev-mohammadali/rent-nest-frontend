"use server";

import { serverClient } from "@/lib/server-client";

export const approveRentalRequest = async (requestId: string) => {
  return serverClient(`/rental-requests/${requestId}`, {
    method: "PATCH",
    body: JSON.stringify({
      status: "APPROVED",
    }),
  });
};

export const rejectRentalRequest = async (requestId: string) => {
  return serverClient(`/rental-requests/${requestId}`, {
    method: "PATCH",
    body: JSON.stringify({
      status: "REJECTED",
    }),
  });
};
