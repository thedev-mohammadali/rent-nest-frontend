import { getPropertyById } from "@/services/property.service";
import { notFound } from "next/navigation";

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
    <div>
      <p>{property.title}</p>
    </div>
  );
};

export default PropertyDetailsPage;
