import { getAdminDashboard } from "@/services/dashboard/admin.service";
import AdminStats from "./components/admin-stats";
import CategoryOverview from "./components/category-overview";
import PropertyOverview from "./components/property-overview";

import UserOverview from "./components/user-overview";

const AdminDashboard = async () => {
  const {
    users,
    properties,
    totalProperties,
    totalUsers,
    categories,
    payments,
  } = await getAdminDashboard();

  return (
    <div className="space-y-8">
      <section>
        <h1 className="text-3xl font-bold tracking-tight">Platform Overview</h1>

        <p className="text-muted-foreground">
          Monitor users, properties, and platform activity.
        </p>
      </section>

      <AdminStats
        totalUsers={totalUsers}
        totalProperties={totalProperties}
        payments={payments}
      />

      <UserOverview users={users} />

      <PropertyOverview properties={properties} />

      <CategoryOverview categories={categories} />
    </div>
  );
};

export default AdminDashboard;
