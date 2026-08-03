import StatCard from "@/components/dashboard/shared/stat-card";
import { Payment, RentalAgreement, RentalRequest } from "@/types/dashboard";

interface Props {
  agreements: RentalAgreement[];
  rentalRequests: RentalRequest[];
  payments: Payment[];
}

const TenantStats = ({ agreements, rentalRequests, payments }: Props) => {
  const activeRentals = agreements.filter(
    (agreement) => agreement.status === "ACTIVE",
  ).length;

  const pendingRequests = rentalRequests.filter(
    (request) => request.status === "PENDING",
  ).length;

  const latestPayment = payments[0];
  return (
    <div className="grid gap-4 md:grid-cols-3">
      <StatCard
        title="Active Rentals"
        value={String(activeRentals)}
        description="Current properties"
      />

      <StatCard
        title="Rental Requests"
        value={String(pendingRequests)}
        description="Pending approval"
      />

      <StatCard
        title="Last Payment"
        value={latestPayment ? `$${latestPayment.amount}` : "$0"}
        description="Latest successful payment"
      />
    </div>
  );
};

export default TenantStats;
