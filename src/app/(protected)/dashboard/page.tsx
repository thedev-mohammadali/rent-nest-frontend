import { getCurrentUser } from "@/services/auth.server";

import AdminDashboard from "@/components/dashboard/admin/dashboard";
import LandlordDashboard from "@/components/dashboard/landlord/dashboard";
import TenantDashboard from "@/components/dashboard/tenant/dashboard";
import { redirect } from "next/navigation";

const DashboardPage = async () => {
  const user = await getCurrentUser();

  if (!user) {
    redirect("/login");
  }

  switch (user.role) {
    case "ADMIN":
      return <AdminDashboard />;

    case "LANDLORD":
      return <LandlordDashboard />;

    case "TENANT":
      return <TenantDashboard />;

    default:
      return null;
  }
};

export default DashboardPage;
