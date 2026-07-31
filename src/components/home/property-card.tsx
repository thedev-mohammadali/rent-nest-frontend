import { PLACEHOLDER_IMAGE } from "@/lib/constants";
import { Property } from "@/types/property";
import { Bed, Scaling, ShowerHead } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { AspectRatio } from "../ui/aspect-ratio";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";

const PropertyCard = ({ property }: { property: Property }) => {
  return (
    <Card className="group overflow-hidden pt-0 transition-shadow duration-300 hover:shadow-lg">
      <div className="relative">
        <AspectRatio ratio={4 / 3} className="overflow-hidden">
          <Image
            src={
              property.images.length > 0
                ? property.images[0]
                : PLACEHOLDER_IMAGE
            }
            alt={property.title}
            fill
            className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
          />
        </AspectRatio>

        <div className="absolute top-3 left-3">
          <span
            className={`rounded-full px-3 py-1 text-xs text-white ${property.isAvailable ? "bg-green-600" : "bg-red-500"}`}
          >
            {property.isAvailable ? "Available" : "Rented"}
          </span>
        </div>
      </div>

      <CardHeader>
        <CardTitle>{property.title}</CardTitle>
      </CardHeader>

      <CardContent>
        <p className="text-muted-foreground">{property.location}</p>

        <div className="mt-4 flex gap-4 text-sm">
          <span>
            <Bed className="h-4 w-4" /> {property.bedrooms} Beds
          </span>

          <span>
            <ShowerHead className="h-4 w-4" /> {property.bathrooms} Baths
          </span>

          <span>
            <Scaling className="h-4 w-4" /> {property.size}
          </span>
        </div>
      </CardContent>

      <CardFooter className="flex items-center justify-between">
        <div>
          <span className="text-muted-foreground">Monthly Rent</span>

          <p className="text-xl font-bold">৳ {property.rent}</p>
        </div>

        <Button asChild>
          <Link href={`/properties/${property.id}`}>View Details</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default PropertyCard;
