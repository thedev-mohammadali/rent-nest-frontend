import { LandlordProperty } from "@/types/dashboard";
import EmptyState from "../../shared/empty-state";
import PropertyCard from "./property-card";

type Props = {
  properties: LandlordProperty[];
};

const PropertyOverview = ({ properties }: Props) => {
  return (
    <section className="space-y-4">
      <div>
        <h2 className="text-xl font-semibold">My Properties</h2>

        <p className="text-muted-foreground text-sm">
          Manage your rental listings.
        </p>
      </div>

      {properties.length === 0 ? (
        <EmptyState message="No properties listed yet." />
      ) : (
        <div className="grid gap-4 md:grid-cols-2">
          {properties.map((property) => (
            <PropertyCard key={property.id} {...property} />
          ))}
        </div>
      )}
    </section>
  );
};

export default PropertyOverview;
