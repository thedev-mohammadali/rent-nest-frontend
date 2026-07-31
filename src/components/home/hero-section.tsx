import { Button } from "@/components/ui/button";
import Link from "next/link";
import HeroImage from "./hero-image";
import PropertySearch from "./property-search";

const HeroSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
              Find Your Perfect Rental Home
            </h1>

            <p className="text-muted-foreground mx-auto mt-6 max-w-2xl text-lg lg:mx-0">
              Discover comfortable homes, apartments, and spaces that fit your
              lifestyle.
            </p>

            <PropertySearch />

            <div className="mt-8 flex justify-center lg:justify-start">
              <Button variant={"outline"} asChild>
                <Link href="/properties">Explore Properties</Link>
              </Button>
            </div>
          </div>

          <HeroImage />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
