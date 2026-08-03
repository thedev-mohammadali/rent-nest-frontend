import { getCurrentUser } from "@/services/auth.server";
import { UserRole } from "@/types/auth";
import { redirect } from "next/navigation";

export const requireAuth = async () => {
  const user = await getCurrentUser();

  if (!user) {
    redirect("/login");
  }

  return user;
};

export const requireRole = async (role: UserRole) => {
  const user = await requireAuth();

  if (role !== user.role) {
    redirect("/unauthorized");
  }

  return user;
};
