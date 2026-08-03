import { getLandlordDashboard } from "@/services/dashboard/landlord.service";
import AgreementSummary from "./components/agreement-summary";
import LandlordStats from "./components/landlord-stats";
import PropertyOverview from "./components/property-overview";
import RentalRequestList from "./components/rental-request-list";

const LandlordDashboard = async () => {
  const { properties, rentalRequests, agreements } =
    await getLandlordDashboard();

  return (
    <div className="space-y-8">
      <section>
        <h1 className="text-3xl font-bold tracking-tight">Welcome back 👋</h1>

        <p className="text-muted-foreground">
          Manage your properties, tenants, and rental income.
        </p>
      </section>

      <LandlordStats
        properties={properties}
        rentalRequests={rentalRequests}
        agreements={agreements}
      />

      <PropertyOverview properties={properties} />

      <RentalRequestList requests={rentalRequests} />

      <AgreementSummary agreements={agreements} />
    </div>
  );
};

export default LandlordDashboard;
