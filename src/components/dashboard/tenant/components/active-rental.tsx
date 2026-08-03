import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { Badge } from "@/components/ui/badge";

import { Button } from "@/components/ui/button";
import { RentalAgreement } from "@/types/dashboard";

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
          <p className="text-muted-foreground">
            You don&apos;t have an active rental yet.
          </p>
        </CardContent>
      </Card>
    );
  }

  const leasePeriod = `${new Date(
    agreement.leaseStartDate,
  ).toLocaleDateString()} - ${new Date(
    agreement.leaseEndDate,
  ).toLocaleDateString()}`;

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

            <p className="font-semibold">${agreement.property.rent}</p>
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

        <Button>View Agreement</Button>
      </CardContent>
    </Card>
  );
};

export default ActiveRental;
