import StatCard from "@/components/dashboard/shared/stat-card";

const TenantStats = () => {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      <StatCard
        title="Active Rentals"
        value="1"
        description="Current properties"
      />

      <StatCard
        title="Rental Requests"
        value="3"
        description="Pending approval"
      />

      <StatCard
        title="Next Payment"
        value="$850"
        description="Due this month"
      />
    </div>
  );
};

export default TenantStats;
