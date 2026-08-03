import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import StatusBadge from "@/components/dashboard/shared/status-badge";

const agreements = [
  {
    id: 1,
    tenant: "Ali",
    property: "Modern Apartment",
    status: "ACTIVE",
  },
  {
    id: 2,
    tenant: "John",
    property: "Family House",
    status: "PENDING_PAYMENT",
  },
];

const AgreementSummary = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Active Agreements</CardTitle>
      </CardHeader>

      <CardContent className="space-y-4">
        {agreements.map((agreement) => (
          <div
            key={agreement.id}
            className="flex flex-col gap-3 rounded-lg border p-4 sm:flex-row sm:items-center sm:justify-between"
          >
            <div>
              <h3 className="font-medium">{agreement.tenant}</h3>

              <p className="text-muted-foreground text-sm">
                {agreement.property}
              </p>
            </div>

            <StatusBadge status={agreement.status} />
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default AgreementSummary;
