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

export interface CreateRentalRequestPayload {
  propertyId: string;
  tenantMessage: string;
  requestedMoveInDate: string;
  durationInMonths: number;
}

export const createRentalRequest = async (
  payload: CreateRentalRequestPayload,
) => {
  return serverClient("/rental-requests", {
    method: "POST",
    body: JSON.stringify(payload),
  });
};
