import StatCard from "@/components/dashboard/shared/stat-card";
import { formatCurrency } from "@/lib/formatter/currency";
import { Payment } from "@/types/dashboard";

type Props = {
  totalUsers: number;
  totalProperties: number;
  payments: Payment[];
};

const AdminStats = ({ totalUsers, totalProperties, payments }: Props) => {
  const totalRevenue = payments
    .filter((payment) => payment.status === "PAID")
    .reduce((sum, payment) => sum + Number(payment.amount), 0);

  return (
    <div className="grid gap-4 md:grid-cols-3">
      <StatCard
        title="Total Users"
        value={String(totalUsers)}
        description="Registered accounts"
      />

      <StatCard
        title="Properties"
        value={String(totalProperties)}
        description="Listed properties"
      />

      <StatCard
        title="Revenue"
        value={formatCurrency(totalRevenue)}
        description="Platform earnings"
      />
    </div>
  );
};

export default AdminStats;
