import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const LandlordDashboard = () => {
  return (
    <div className="space-y-6">
      <div>
        <Badge>Landlord</Badge>

        <h1 className="mt-3 text-3xl font-bold">Property Dashboard</h1>

        <p className="text-muted-foreground">
          Manage your properties, rental requests, and agreements.
        </p>
      </div>

      <Separator />

      <div className="grid gap-4 md:grid-cols-3">
        <StatCard
          title="My Properties"
          value="12"
          description="Total listings"
        />

        <StatCard
          title="Pending Requests"
          value="8"
          description="Need your attention"
        />

        <StatCard
          title="Monthly Income"
          value="$4,250"
          description="Current earnings"
        />
      </div>
    </div>
  );
};

const StatCard = ({
  title,
  value,
  description,
}: {
  title: string;
  value: string;
  description: string;
}) => (
  <Card>
    <CardHeader>
      <CardTitle className="text-sm">{title}</CardTitle>
    </CardHeader>

    <CardContent>
      <p className="text-3xl font-bold">{value}</p>

      <p className="text-muted-foreground text-sm">{description}</p>
    </CardContent>
  </Card>
);

export default LandlordDashboard;
