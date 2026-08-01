import { Bed, Scaling, ShowerHead } from "lucide-react";

import type { Property } from "@/types/property";

export default function PropertyInfo({ property }: { property: Property }) {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">{property.title}</h1>

        <p className="text-muted-foreground mt-2">{property.location}</p>
      </div>

      <div>
        <p className="text-2xl font-bold">৳ {property.rent}</p>

        <span className="text-muted-foreground">per month</span>
      </div>

      <div className="flex gap-6">
        <span className="flex items-center gap-2">
          <Bed className="h-5 w-5" />
          {property.bedrooms}
        </span>

        <span className="flex items-center gap-2">
          <ShowerHead className="h-5 w-5" />
          {property.bathrooms}
        </span>

        <span className="flex items-center gap-2">
          <Scaling className="h-5 w-5" />
          {property.size}
        </span>
      </div>
    </div>
  );
}
