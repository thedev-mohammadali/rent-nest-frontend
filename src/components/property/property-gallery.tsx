import { Property } from "@/types/property";
import Image from "next/image";

const PropertyGallery = ({ property }: { property: Property }) => {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {property.images.map((image) => (
        <div
          key={image}
          className="relative aspect-video overflow-hidden rounded-xl"
        >
          <Image
            src={image}
            alt={property.title}
            fill
            className="object-cover"
          />
        </div>
      ))}
    </div>
  );
};

export default PropertyGallery;
