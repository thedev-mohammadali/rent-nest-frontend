import TenantStats from "./components/tenant-stats";

const TenantDashboard = () => {
  return (
    <div className="space-y-8">
      <section>
        <h1 className="text-3xl font-bold tracking-tight">Welcome back 👋</h1>

        <p className="text-muted-foreground">
          Manage your rentals, agreements, and payments.
        </p>
      </section>

      <TenantStats />
    </div>
  );
};

export default TenantDashboard;
