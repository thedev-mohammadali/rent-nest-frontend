import MobileNav from "@/components/layout/mobile-nav";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Navbar = () => {
  return (
    <header>
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="text-2xl font-bold">
          RentNest
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          <Link href="/properties">Properties</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </nav>

        <div className="hidden gap-4 md:flex">
          <Button variant={"outline"}>Login</Button>
          <Button>Register</Button>
        </div>

        <div className="md:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
