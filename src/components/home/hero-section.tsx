import Link from "next/link";
import { Button } from "../ui/button";
import PropertySearch from "./property-search";

const HeroSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
          Find Your Perfect Rental Home
        </h1>

        <p className="text-muted-foreground mx-auto mt-6 max-w-2xl text-lg">
          Discover comfortable homes, apartments, and spaces that fit your
          lifestyle.
        </p>

        <PropertySearch />

        <div className="mt-8 flex justify-center">
          <Button variant={"outline"} asChild>
            <Link href="/properties">Explore Properties</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
