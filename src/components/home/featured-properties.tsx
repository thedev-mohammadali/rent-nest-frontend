import { getFeaturedProperties } from "@/services/property.service";
import PropertyCard from "./property-card";

export default async function FeaturedProperties() {
  const properties = await getFeaturedProperties();

  return (
    <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {properties.map((property) => (
        <PropertyCard key={property.id} property={property} />
      ))}
    </div>
  );
}
