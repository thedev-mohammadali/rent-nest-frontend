import StatCard from "@/components/dashboard/shared/stat-card";

const AdminStats = () => {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      <StatCard
        title="Total Users"
        value="1248"
        description="Registered accounts"
      />

      <StatCard
        title="Properties"
        value="342"
        description="Listed properties"
      />

      <StatCard
        title="Revenue"
        value="$24500"
        description="Platform earnings"
      />
    </div>
  );
};

export default AdminStats;
