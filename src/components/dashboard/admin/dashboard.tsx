import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const AdminDashboard = () => {
  return (
    <div className="space-y-6">
      <div>
        <Badge variant="secondary">Administrator</Badge>

        <h1 className="mt-3 text-3xl font-bold tracking-tight">
          Admin Dashboard
        </h1>

        <p className="text-muted-foreground">
          Manage users, properties, categories, and platform activity.
        </p>
      </div>

      <Separator />

      <div className="grid gap-4 md:grid-cols-3">
        <DashboardCard
          title="Users"
          value="1,248"
          description="Registered users"
        />

        <DashboardCard
          title="Properties"
          value="342"
          description="Active listings"
        />

        <DashboardCard
          title="Revenue"
          value="$24,560"
          description="Monthly revenue"
        />
      </div>
    </div>
  );
};

const DashboardCard = ({
  title,
  value,
  description,
}: {
  title: string;
  value: string;
  description: string;
}) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
      </CardHeader>

      <CardContent>
        <p className="text-3xl font-bold">{value}</p>

        <p className="text-muted-foreground mt-1 text-sm">{description}</p>
      </CardContent>
    </Card>
  );
};

export default AdminDashboard;
