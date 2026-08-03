import StatCard from "@/components/dashboard/shared/stat-card";

const LandlordStats = () => {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      <StatCard title="My Properties" value="12" description="Total listings" />

      <StatCard
        title="Rental Requests"
        value="5"
        description="Waiting approval"
      />

      <StatCard
        title="Monthly Income"
        value="$4200"
        description="Current earnings"
      />
    </div>
  );
};

export default LandlordStats;
