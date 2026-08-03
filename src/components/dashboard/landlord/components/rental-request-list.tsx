import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { Button } from "@/components/ui/button";

import StatusBadge from "@/components/dashboard/shared/status-badge";

const requests = [
  {
    id: 1,
    tenant: "Ali",
    property: "Modern Apartment",
    status: "PENDING",
  },
  {
    id: 2,
    tenant: "John",
    property: "Family House",
    status: "APPROVED",
  },
];

const RentalRequestList = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Rental Requests</CardTitle>
      </CardHeader>

      <CardContent className="space-y-4">
        {requests.map((request) => (
          <div key={request.id} className="space-y-4 rounded-lg border p-4">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h3 className="font-medium">{request.tenant}</h3>

                <p className="text-muted-foreground text-sm">
                  {request.property}
                </p>
              </div>

              <StatusBadge status={request.status} />
            </div>

            {request.status === "PENDING" && (
              <div className="flex gap-3">
                <Button>Approve</Button>

                <Button variant="destructive">Reject</Button>
              </div>
            )}
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default RentalRequestList;
