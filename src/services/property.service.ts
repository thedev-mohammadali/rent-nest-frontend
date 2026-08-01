import { env } from "@/lib/env";
import { ApiResponse, PaginatedResponse } from "@/types/api";
import { Property } from "@/types/property";

const delay = (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

export const getFeaturedProperties = async (): Promise<Property[]> => {
  if (process.env.NODE_ENV === "development") {
    await delay(3000);
  }

  const response = await fetch(`${env.apiUrl}/properties?limit=6`, {
    next: {
      revalidate: 60,
    },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch properties");
  }

  const result: PaginatedResponse<Property> = await response.json();

  return result.data;
};

export const getPropertyById = async (id: string): Promise<Property | null> => {
  if (process.env.NODE_ENV === "development") {
    await delay(3000);
  }

  const response = await fetch(`${env.apiUrl}/properties/${id}`, {
    next: {
      revalidate: 60,
    },
  });

  if (response.status === 404) {
    return null;
  }

  if (!response.ok) {
    throw new Error("Failed to fetch property");
  }

  const result: ApiResponse<Property> = await response.json();

  return result.data;
};
