import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { formatCurrency } from "@/lib/formatter/currency";
import { formatDate } from "@/lib/formatter/date";

import { Payment } from "@/types/dashboard";
import EmptyState from "../../shared/empty-state";

interface Props {
  payments: Payment[];
}

const PaymentSummary = ({ payments }: Props) => {
  const latestPayment = payments[0];

  const totalPaid = payments
    .filter((payment) => payment.status === "PAID")
    .reduce((sum, payment) => sum + Number(payment.amount), 0);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Payment Overview</CardTitle>
      </CardHeader>

      <CardContent className="space-y-6">
        <div>
          <p className="text-muted-foreground text-sm">Total Paid</p>

          <p className="text-3xl font-bold">{formatCurrency(totalPaid)}</p>
        </div>

        {latestPayment && (
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <p className="text-muted-foreground text-sm">Last Payment</p>

              <p className="font-medium">
                {formatDate(latestPayment.createdAt)}
              </p>
            </div>

            {latestPayment ? (
              <div>
                <p className="text-muted-foreground text-sm">Status</p>

                <Badge>{latestPayment.status}</Badge>
              </div>
            ) : (
              <EmptyState message="No payments found yet." />
            )}
          </div>
        )}

        <Button variant="outline">View Payments</Button>
      </CardContent>
    </Card>
  );
};

export default PaymentSummary;
