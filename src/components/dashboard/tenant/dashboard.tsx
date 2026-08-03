import { getTenantDashboard } from "@/services/dashboard/tenant.service";
import ActiveRental from "./components/active-rental";
import PaymentSummary from "./components/payment-summary";
import RentalRequestTable from "./components/rental-request-table";
import TenantStats from "./components/tenant-stats";

const TenantDashboard = async () => {
  const { rentalRequests, agreements, payments } = await getTenantDashboard();

  const activeAgreement = agreements.find(
    (agreement) => agreement.status === "ACTIVE",
  );

  return (
    <div className="space-y-8">
      <section>
        <h1 className="text-3xl font-bold tracking-tight">Welcome back 👋</h1>

        <p className="text-muted-foreground">
          Manage your rentals, agreements, and payments.
        </p>
      </section>

      <TenantStats
        agreements={agreements}
        rentalRequests={rentalRequests}
        payments={payments}
      />

      <ActiveRental agreement={activeAgreement} />

      <RentalRequestTable requests={rentalRequests} />

      <PaymentSummary payments={payments} />
    </div>
  );
};

export default TenantDashboard;
