import { getFeaturedProperties } from "@/services/property.service";

export default async function FeaturedProperties() {
  const properties = await getFeaturedProperties();

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold">Featured Properties</h2>

        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {properties.map((property) => (
            <div key={property.id}>{property.title}</div>
          ))}
        </div>
      </div>
    </section>
  );
}
