import ActiveRental from "./components/active-rental";
import RentalRequestTable from "./components/rental-request-table";
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

      <ActiveRental />

      <RentalRequestTable />
    </div>
  );
};

export default TenantDashboard;
