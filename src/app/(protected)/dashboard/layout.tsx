import { requireAuth } from "@/services/auth.guard";
import { ReactNode } from "react";

const DashboardLayout = async ({ children }: { children: ReactNode }) => {
  await requireAuth();

  return <main className="container mx-auto flex-1 px-4">{children}</main>;
};

export default DashboardLayout;
