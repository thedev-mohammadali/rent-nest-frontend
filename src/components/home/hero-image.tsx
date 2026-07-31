import { Check, Star } from "lucide-react";
import Image from "next/image";

const HeroImage = () => {
  return (
    <div className="relative">
      <Image
        src="/images/hero-home.jpg"
        alt="Modern apartment interior"
        width={600}
        height={700}
        className="h-auto w-full rounded-3xl object-cover"
        priority
      />

      <div className="bg-background absolute bottom-6 left-6 rounded-xl border p-4 shadow-lg">
        <div className="flex items-center gap-2">
          <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
          <span className="font-semibold">4.9</span>
        </div>
        <p className="text-muted-foreground text-sm">Average rating</p>
      </div>

      <div className="bg-background absolute top-6 right-6 rounded-xl border p-4 shadow-lg">
        <p className="flex items-center gap-1 font-semibold">
          <Check className="h-5 w-5" />
          <span>Verified Homes</span>
        </p>

        <p className="text-muted-foreground text-sm">Safe & trusted listings</p>
      </div>
    </div>
  );
};

export default HeroImage;
