import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import StatusBadge from "@/components/dashboard/shared/status-badge";
import { RentalAgreement } from "@/types/dashboard";
import EmptyState from "../../shared/empty-state";

type Props = {
  agreements: RentalAgreement[];
};

const AgreementSummary = ({ agreements }: Props) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Active Agreements</CardTitle>
      </CardHeader>

      <CardContent>
        {agreements.length === 0 ? (
          <EmptyState message="No agreements found." />
        ) : (
          <div className="space-y-4">
            {agreements.map((agreement) => (
              <div
                key={agreement.id}
                className="flex flex-col gap-3 rounded-lg border p-4 sm:flex-row sm:items-center sm:justify-between"
              >
                <div>
                  <h3 className="font-medium">{agreement.tenant.name}</h3>

                  <p className="text-muted-foreground text-sm">
                    {agreement.property.title}
                  </p>
                </div>

                <StatusBadge status={agreement.status} />
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default AgreementSummary;
