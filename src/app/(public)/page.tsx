import FeaturedProperties from "@/components/home/featured-properties";
import FeaturedPropertiesSkeleton from "@/components/home/featured-properties-skeleton";
import HeroSection from "@/components/home/hero-section";
import { Suspense } from "react";

const HomePage = () => {
  return (
    <>
      <HeroSection />

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl font-bold">Featured Properties</h2>

            <p>Explore our latest available rental properties</p>
          </div>

          <Suspense fallback={<FeaturedPropertiesSkeleton />}>
            <FeaturedProperties />
          </Suspense>
        </div>
      </section>
    </>
  );
};

export default HomePage;
