import { ApiError } from "@/lib/api-error";
import { serverClient } from "@/lib/server-client";
import { ApiResponse, PaginatedResponse } from "@/types/api";
import { Property } from "@/types/property";

const delay = (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

export const getFeaturedProperties = async (): Promise<Property[]> => {
  if (process.env.NODE_ENV === "development") {
    await delay(1500);
  }

  const result: PaginatedResponse<Property> = await serverClient(
    "/properties?limit=6",
    {
      next: {
        revalidate: 60,
      },
    },
  );

  return result.data;
};

export const getPropertyById = async (id: string): Promise<Property | null> => {
  if (process.env.NODE_ENV === "development") {
    await delay(1500);
  }

  try {
    const result: ApiResponse<Property> = await serverClient(
      `/properties/${id}`,
      {
        next: {
          revalidate: 60,
        },
      },
    );

    return result.data;
  } catch (error) {
    if (error instanceof ApiError && error.statusCode === 404) {
      return null;
    }

    throw error;
  }
};
