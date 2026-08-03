import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { Badge } from "@/components/ui/badge";

import { Button } from "@/components/ui/button";

const ActiveRental = () => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Current Rental</CardTitle>

        <Badge>Active</Badge>
      </CardHeader>

      <CardContent className="space-y-6">
        <div>
          <h3 className="text-xl font-semibold">Modern Apartment</h3>

          <p className="text-muted-foreground text-sm">📍 Dhaka, Bangladesh</p>
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          <div>
            <p className="text-muted-foreground text-sm">Monthly Rent</p>

            <p className="font-semibold">$850</p>
          </div>

          <div>
            <p className="text-muted-foreground text-sm">Duration</p>

            <p className="font-semibold">12 months</p>
          </div>

          <div>
            <p className="text-muted-foreground text-sm">Lease Status</p>

            <p className="font-semibold">Active</p>
          </div>
        </div>

        <Button>View Agreement</Button>
      </CardContent>
    </Card>
  );
};

export default ActiveRental;
