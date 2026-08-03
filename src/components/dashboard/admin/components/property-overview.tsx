import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { Badge } from "@/components/ui/badge";

const properties = [
  {
    id: 1,
    title: "Modern Apartment",
    owner: "John",
    location: "Dhaka",
    status: "AVAILABLE",
  },
  {
    id: 2,
    title: "Family House",
    owner: "Ali",
    location: "Gazipur",
    status: "OCCUPIED",
  },
  {
    id: 3,
    title: "Office Space",
    owner: "Sarah",
    location: "Dhaka",
    status: "AVAILABLE",
  },
];

const PropertyOverview = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Properties</CardTitle>
      </CardHeader>

      <CardContent>
        <div className="space-y-4">
          {properties.map((property) => (
            <div
              key={property.id}
              className="flex flex-col gap-3 rounded-lg border p-4 sm:flex-row sm:items-center sm:justify-between"
            >
              <div>
                <h3 className="font-medium">{property.title}</h3>

                <p className="text-muted-foreground text-sm">
                  Owner: {property.owner}
                </p>

                <p className="text-muted-foreground text-sm">
                  📍 {property.location}
                </p>
              </div>

              <Badge variant="secondary">{property.status}</Badge>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default PropertyOverview;
