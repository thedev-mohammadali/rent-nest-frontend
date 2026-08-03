import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { Layers } from "lucide-react";

const categories = [
  {
    id: 1,
    name: "Apartment",
    properties: 120,
  },
  {
    id: 2,
    name: "House",
    properties: 85,
  },
  {
    id: 3,
    name: "Office Space",
    properties: 30,
  },
];

const CategoryOverview = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Property Categories</CardTitle>
      </CardHeader>

      <CardContent>
        <div className="grid gap-4 md:grid-cols-3">
          {categories.map((category) => (
            <div
              key={category.id}
              className="flex items-center gap-4 rounded-lg border p-4"
            >
              <div className="bg-muted rounded-lg p-3">
                <Layers className="h-5 w-5" />
              </div>

              <div>
                <h3 className="font-medium">{category.name}</h3>

                <p className="text-muted-foreground text-sm">
                  {category.properties} properties
                </p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default CategoryOverview;
