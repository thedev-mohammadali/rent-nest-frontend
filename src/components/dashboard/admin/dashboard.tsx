import AdminStats from "./components/admin-stats";
import CategoryOverview from "./components/category-overview";
import PropertyOverview from "./components/property-overview";

import UserOverview from "./components/user-overview";

const AdminDashboard = () => {
  return (
    <div className="space-y-8">
      <section>
        <h1 className="text-3xl font-bold tracking-tight">Platform Overview</h1>

        <p className="text-muted-foreground">
          Monitor users, properties, and platform activity.
        </p>
      </section>

      <AdminStats />

      <UserOverview />

      <PropertyOverview />

      <CategoryOverview />
    </div>
  );
};

export default AdminDashboard;
