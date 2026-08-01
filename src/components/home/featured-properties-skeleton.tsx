import { AspectRatio } from "../ui/aspect-ratio";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import { Skeleton } from "../ui/skeleton";

const FeaturedPropertiesSkeleton = () => {
  return (
    <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: 6 }).map((_, index) => (
        <Card key={index} className="overflow-hidden pt-0">
          <div>
            <AspectRatio ratio={4 / 3} className="overflow-hidden">
              <Skeleton className="h-full w-full" />
            </AspectRatio>
          </div>

          <CardHeader>
            <Skeleton className="h-4 w-full" />
          </CardHeader>

          <CardContent>
            <Skeleton className="h-4 w-1/3" />

            <div className="mt-4 flex gap-4 text-sm">
              <span>
                <Skeleton className="h-4 w-4" />
              </span>

              <span>
                <Skeleton className="h-4 w-4" />
              </span>

              <span>
                <Skeleton className="h-4 w-4" />
              </span>
            </div>
          </CardContent>

          <CardFooter className="flex items-center justify-between">
            <div>
              <Skeleton className="h-4 w-4" />

              <Skeleton className="h-4 w-4" />
            </div>

            <Skeleton className="h-4 w-6" />
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default FeaturedPropertiesSkeleton;
