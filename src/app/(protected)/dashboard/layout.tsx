import DashboardShell from "@/components/dashboard/layout/dashboard-shell";
import { requireAuth } from "@/services/auth.guard";
import { ReactNode } from "react";

const DashboardLayout = async ({ children }: { children: ReactNode }) => {
  await requireAuth();

  return <DashboardShell>{children}</DashboardShell>;
};

export default DashboardLayout;
