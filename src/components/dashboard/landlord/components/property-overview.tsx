import PropertyCard from "./property-card";

const properties = [
  {
    id: 1,
    title: "Modern Apartment",
    location: "Dhaka",
    rent: 900,
    available: true,
  },
  {
    id: 2,
    title: "Family House",
    location: "Gazipur",
    rent: 700,
    available: false,
  },
];

const PropertyOverview = () => {
  return (
    <section className="space-y-4">
      <div>
        <h2 className="text-xl font-semibold">My Properties</h2>

        <p className="text-muted-foreground text-sm">
          Manage your rental listings.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {properties.map((property) => (
          <PropertyCard key={property.id} {...property} />
        ))}
      </div>
    </section>
  );
};

export default PropertyOverview;
