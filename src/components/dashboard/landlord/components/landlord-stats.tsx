import StatCard from "@/components/dashboard/shared/stat-card";
import {
  LandlordProperty,
  RentalAgreement,
  RentalRequest,
} from "@/types/dashboard";

interface Props {
  properties: LandlordProperty[];
  rentalRequests: RentalRequest[];
  agreements: RentalAgreement[];
}

const LandlordStats = ({ properties, rentalRequests, agreements }: Props) => {
  const pendingRequests = rentalRequests.filter(
    (request) => request.status === "PENDING",
  ).length;

  return (
    <div className="grid gap-4 md:grid-cols-3">
      <StatCard
        title="My Properties"
        value={String(properties.length)}
        description="Total listings"
      />

      <StatCard
        title="Rental Requests"
        value={String(pendingRequests)}
        description="Waiting approval"
      />

      <StatCard
        title="Rental Agreements"
        value={String(agreements.length)}
        description="Current agreements"
      />
    </div>
  );
};

export default LandlordStats;
