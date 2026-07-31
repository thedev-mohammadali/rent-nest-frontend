import { env } from "@/lib/env";
import { PaginatedResponse } from "@/types/api";
import { Property } from "@/types/property";

export const getFeaturedProperties = async () => {
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
