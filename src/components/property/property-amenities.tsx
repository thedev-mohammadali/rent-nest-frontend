export default function PropertyAmenities({
  amenities,
}: {
  amenities: string[];
}) {
  return (
    <div>
      <h2 className="text-xl font-semibold">Amenities</h2>

      <div className="mt-4 flex flex-wrap gap-3">
        {amenities.map((item) => (
          <span key={item} className="bg-muted rounded-full px-4 py-2 text-sm">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
