import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { Badge } from "@/components/ui/badge";

import { formatCurrency } from "@/lib/formatter/currency";
import { formatDate } from "@/lib/formatter/date";
import { RentalAgreement } from "@/types/dashboard";
import EmptyState from "../../shared/empty-state";
import PaymentButton from "./payment-button";

type Props = {
  agreement?: RentalAgreement;
};

const ActiveRental = ({ agreement }: Props) => {
  if (!agreement) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Current Rental</CardTitle>
        </CardHeader>

        <CardContent>
          <EmptyState message="You don't have an active rental yet." />
        </CardContent>
      </Card>
    );
  }

  const leasePeriod = `${formatDate(agreement.leaseStartDate)} - ${formatDate(
    agreement.leaseEndDate,
  )}`;

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Current Rental</CardTitle>

        <Badge>Active</Badge>
      </CardHeader>

      <CardContent className="space-y-6">
        <div>
          <h3 className="text-xl font-semibold">{agreement.property.title}</h3>

          <p className="text-muted-foreground text-sm">
            📍 {agreement.property.location}
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          <div>
            <p className="text-muted-foreground text-sm">Monthly Rent</p>

            <p className="font-semibold">
              {formatCurrency(agreement.property.rent)}
            </p>
          </div>

          <div>
            <p className="text-muted-foreground text-sm">Duration</p>

            <p className="font-semibold">{leasePeriod}</p>
          </div>

          <div>
            <p className="text-muted-foreground text-sm">Lease Status</p>

            <p className="font-semibold">{agreement.status}</p>
          </div>
        </div>

        {agreement.status === "PENDING_PAYMENT" && (
          <PaymentButton agreementId={agreement.id} />
        )}
      </CardContent>
    </Card>
  );
};

export default ActiveRental;
