import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import StatusBadge from "@/components/dashboard/shared/status-badge";

const requests = [
  {
    id: 1,
    property: "Modern Apartment",
    location: "Dhaka",
    status: "PENDING",
  },
  {
    id: 2,
    property: "Luxury Villa",
    location: "Chittagong",
    status: "APPROVED",
  },
  {
    id: 3,
    property: "Family House",
    location: "Dhaka",
    status: "REJECTED",
  },
];

const RentalRequestTable = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Rental Requests</CardTitle>
      </CardHeader>

      <CardContent>
        <div className="space-y-4">
          {requests.map((request) => (
            <div
              key={request.id}
              className="flex flex-col gap-3 rounded-lg border p-4 sm:flex-row sm:items-center sm:justify-between"
            >
              <div>
                <h3 className="font-medium">{request.property}</h3>

                <p className="text-muted-foreground text-sm">
                  📍 {request.location}
                </p>
              </div>

              <StatusBadge status={request.status} />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default RentalRequestTable;
