import { Skeleton } from "@/components/ui/skeleton";

const Loading = () => {
  return (
    <main className="container mx-auto flex-1 p-6">
      <div className="space-y-4">
        <Skeleton className="h-10 w-64" />
        <Skeleton className="h-40 w-full" />
        <Skeleton className="h-40 w-full" />
      </div>
    </main>
  );
};

export default Loading;
