import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { Badge } from "@/components/ui/badge";
import { AdminProperty } from "@/types/dashboard";
import EmptyState from "../../shared/empty-state";

type Props = {
  properties: AdminProperty[];
};

const PropertyOverview = ({ properties }: Props) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Properties</CardTitle>
      </CardHeader>

      <CardContent>
        {properties.length === 0 ? (
          <EmptyState message="No properties found." />
        ) : (
          <div className="space-y-4">
            <div className="space-y-4">
              {properties.map((property) => (
                <div
                  key={property.id}
                  className="flex flex-col gap-3 rounded-lg border p-4 sm:flex-row sm:items-center sm:justify-between"
                >
                  <div>
                    <h3 className="font-medium">{property.title}</h3>

                    <p className="text-muted-foreground text-sm">
                      Owner: {property.landlord.name}
                    </p>

                    <p className="text-muted-foreground text-sm">
                      📍 {property.location}
                    </p>
                  </div>

                  <Badge variant="secondary">
                    {property.isAvailable ? "AVAILABLE" : "OCCUPIED"}
                  </Badge>
                </div>
              ))}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default PropertyOverview;
