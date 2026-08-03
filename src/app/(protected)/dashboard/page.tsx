import { getCurrentUser } from "@/services/auth.server";

import AdminDashboard from "@/components/dashboard/admin/dashboard";
import LandlordDashboard from "@/components/dashboard/landlord/dashboard";
import TenantDashboard from "@/components/dashboard/tenant/dashboard";

const DashboardPage = async () => {
  const user = await getCurrentUser();

  switch (user?.role) {
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
