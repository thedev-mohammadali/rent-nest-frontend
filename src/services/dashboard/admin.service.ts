import "server-only";

import { serverClient } from "@/lib/server-client";
import { PaginatedResponse } from "@/types/api";

import { Category } from "@/types/category";
import {
  AdminDashboardData,
  AdminProperty,
  AdminUser,
  Payment,
} from "@/types/dashboard";

export const getAdminDashboard = async (): Promise<AdminDashboardData> => {
  const [
    usersResponse,
    propertiesResponse,
    categoriesResponse,
    paymentsResponse,
  ] = await Promise.all([
    serverClient<PaginatedResponse<AdminUser>>("/admin/users"),

    serverClient<PaginatedResponse<AdminProperty>>("/properties"),

    serverClient<PaginatedResponse<Category>>("/categories"),

    serverClient<PaginatedResponse<Payment>>("/payments"),
  ]);

  return {
    users: usersResponse.data,
    properties: propertiesResponse.data,
    categories: categoriesResponse.data,
    payments: paymentsResponse.data,
    totalUsers: usersResponse.meta.total,
    totalProperties: propertiesResponse.meta.total,
  };
};
