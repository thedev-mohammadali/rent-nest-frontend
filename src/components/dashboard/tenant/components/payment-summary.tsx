import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { Badge } from "@/components/ui/badge";

import { Button } from "@/components/ui/button";

const PaymentSummary = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Payment Overview</CardTitle>
      </CardHeader>

      <CardContent className="space-y-6">
        <div>
          <p className="text-muted-foreground text-sm">Current Payment</p>

          <p className="text-3xl font-bold">$850</p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <p className="text-muted-foreground text-sm">Last Payment</p>

            <p className="font-medium">Aug 01, 2026</p>
          </div>

          <div>
            <p className="text-muted-foreground text-sm">Status</p>

            <Badge>PAID</Badge>
          </div>
        </div>

        <Button variant="outline">View Payments</Button>
      </CardContent>
    </Card>
  );
};

export default PaymentSummary;
