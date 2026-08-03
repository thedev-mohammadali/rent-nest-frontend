import { requireRole } from "@/services/auth.guard";
import { ReactNode } from "react";

const LandlordLayout = async ({ children }: { children: ReactNode }) => {
  await requireRole("LANDLORD");
  return <>{children}</>;
};

export default LandlordLayout;
