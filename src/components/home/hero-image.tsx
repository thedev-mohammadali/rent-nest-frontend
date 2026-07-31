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
    </div>
  );
};

export default HeroImage;
