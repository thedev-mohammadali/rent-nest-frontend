import PropertyInfo from "@/components/property/propert-info";
import PropertyAmenities from "@/components/property/property-amenities";
import PropertyGallery from "@/components/property/property-gallery";
import { getPropertyById } from "@/services/property.service";
import { Metadata } from "next";
import { notFound } from "next/navigation";

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> => {
  const { id } = await params;

  const property = await getPropertyById(id);

  if (!property) {
    return {
      title: "Property Not Found",
    };
  }

  return {
    title: `${property.title} | RentNest`,
    description: property.description,
  };
};

const PropertyDetailsPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;

  const property = await getPropertyById(id);

  if (!property) {
    notFound();
  }
  return (
    <section className="container mx-auto space-y-10 px-4 py-10">
      <PropertyGallery property={property} />
      <PropertyInfo property={property} />
      <PropertyAmenities amenities={property.amenities} />
    </section>
  );
};

export default PropertyDetailsPage;
