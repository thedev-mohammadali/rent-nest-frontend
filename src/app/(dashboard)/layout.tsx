import { requireAuth } from "@/services/auth.guard";
import { ReactNode } from "react";

const DashboardLayout = async ({ children }: { children: ReactNode }) => {
  await requireAuth();

  return <main className="flex-1">{children}</main>;
};

export default DashboardLayout;
