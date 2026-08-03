import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Category } from "@/types/category";

import { Layers } from "lucide-react";
import EmptyState from "../../shared/empty-state";

type Props = {
  categories: Category[];
};

const CategoryOverview = ({ categories }: Props) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Property Categories</CardTitle>
      </CardHeader>

      <CardContent>
        {categories.length === 0 ? (
          <EmptyState message="No categories found." />
        ) : (
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
                    {category.slug}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default CategoryOverview;
