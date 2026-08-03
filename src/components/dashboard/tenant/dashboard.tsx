import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const TenantDashboard = () => {
  return (
    <div className="space-y-6">
      <div>
        <Badge variant="outline">Tenant</Badge>

        <h1 className="mt-3 text-3xl font-bold">Welcome Back 👋</h1>

        <p className="text-muted-foreground">
          Track your rentals, agreements, and payments.
        </p>
      </div>

      <Separator />

      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle className="text-sm">Active Rental</CardTitle>
          </CardHeader>

          <CardContent>
            <p className="text-3xl font-bold">1</p>

            <p className="text-muted-foreground text-sm">Current property</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-sm">Pending Requests</CardTitle>
          </CardHeader>

          <CardContent>
            <p className="text-3xl font-bold">3</p>

            <p className="text-muted-foreground text-sm">Waiting approval</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-sm">Next Payment</CardTitle>
          </CardHeader>

          <CardContent>
            <p className="text-3xl font-bold">$850</p>

            <p className="text-muted-foreground text-sm">Due this month</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default TenantDashboard;
