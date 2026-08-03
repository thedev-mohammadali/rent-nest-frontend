import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Badge } from "@/components/ui/badge";

import { Button } from "@/components/ui/button";
import { formatCurrency } from "@/lib/formatter/currency";

type Props = {
  id: string;
  title: string;
  location: string;
  rent: string;
  isAvailable: boolean;
};

const PropertyCard = ({ title, location, rent, isAvailable }: Props) => {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-start justify-between gap-3">
          <CardTitle className="text-lg">{title}</CardTitle>

          <Badge variant={isAvailable ? "default" : "secondary"}>
            {isAvailable ? "Available" : "Occupied"}
          </Badge>
        </div>
      </CardHeader>

      <CardContent className="space-y-3">
        <p className="text-muted-foreground text-sm">📍 {location}</p>

        <p className="text-xl font-bold">
          {formatCurrency(rent)}
          <span className="text-muted-foreground text-sm font-normal">
            /month
          </span>
        </p>
      </CardContent>

      <CardFooter>
        <Button variant="outline" className="w-full">
          Manage Property
        </Button>
      </CardFooter>
    </Card>
  );
};

export default PropertyCard;
