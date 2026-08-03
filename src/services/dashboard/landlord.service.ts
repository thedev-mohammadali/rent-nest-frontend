import "server-only";

import { serverClient } from "@/lib/server-client";
import { ApiResponse } from "@/types/api";

import {
  LandlordDashboardData,
  LandlordProperty,
  RentalAgreement,
  RentalRequest,
} from "@/types/dashboard";

export const getLandlordDashboard =
  async (): Promise<LandlordDashboardData> => {
    const [propertiesResponse, rentalRequestsResponse, agreementsResponse] =
      await Promise.all([
        serverClient<ApiResponse<LandlordProperty[]>>("/properties/me"),

        serverClient<ApiResponse<RentalRequest[]>>("/rental-requests"),

        serverClient<ApiResponse<RentalAgreement[]>>("/rental-agreements"),
      ]);

    return {
      properties: propertiesResponse.data,

      rentalRequests: rentalRequestsResponse.data,

      agreements: agreementsResponse.data,
    };
  };
