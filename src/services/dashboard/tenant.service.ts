import "server-only";

import { serverClient } from "@/lib/server-client";

import { ApiResponse } from "@/types/api";
import {
  Payment,
  RentalAgreement,
  RentalRequest,
  TenantDashboardData,
} from "@/types/dashboard";

export const getTenantDashboard = async (): Promise<TenantDashboardData> => {
  const [rentalRequestsResponse, agreementsResponse, paymentsResponse] =
    await Promise.all([
      serverClient<ApiResponse<RentalRequest[]>>("/rental-requests"),

      serverClient<ApiResponse<RentalAgreement[]>>("/rental-agreements"),

      serverClient<ApiResponse<Payment[]>>("/payments"),
    ]);

  return {
    rentalRequests: rentalRequestsResponse.data,
    agreements: agreementsResponse.data,
    payments: paymentsResponse.data,
  };
};
