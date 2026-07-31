import { getFeaturedProperties } from "@/services/property.service";
import PropertyCard from "./property-card";

export default async function FeaturedProperties() {
  const properties = await getFeaturedProperties();

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="text-3xl font-bold">Featured Properties</h2>

          <p>Explore our latest available rental properties</p>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {properties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </div>
    </section>
  );
}
