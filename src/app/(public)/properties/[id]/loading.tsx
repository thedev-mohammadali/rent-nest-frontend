const PropertyDetailsLoading = () => {
  return (
    <section className="container mx-auto space-y-10 px-4 py-10">
      <div className="grid gap-4 md:grid-cols-2">
        <div className="bg-muted h-112.5 animate-pulse rounded-xl" />
        <div className="bg-muted h-112.5 animate-pulse rounded-xl" />
      </div>

      <div className="space-y-4">
        <div className="bg-muted h-10 w-2/3 animate-pulse rounded" />

        <div className="bg-muted h-5 w-1/3 animate-pulse rounded" />

        <div className="bg-muted h-8 w-1/4 animate-pulse rounded" />
      </div>
    </section>
  );
};

export default PropertyDetailsLoading;
