import { requireRole } from "@/services/auth.guard";
import { ReactNode } from "react";

const TenantLayout = async ({ children }: { children: ReactNode }) => {
  await requireRole("TENANT");
  return <>{children}</>;
};

export default TenantLayout;
