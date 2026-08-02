import MobileNav from "@/components/layout/mobile-nav";
import { Button } from "@/components/ui/button";
import { getCurrentUser } from "@/services/auth.server";
import Link from "next/link";
import NavbarDropdown from "./navbar-dropdown";

const Navbar = async () => {
  const user = await getCurrentUser();
  return (
    <header className="border-b">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="text-2xl font-bold">
          RentNest
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          <Link href="/properties">Properties</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </nav>

        {user ? (
          <div className="hidden md:block">
            <NavbarDropdown user={user} />
          </div>
        ) : (
          <div className="hidden gap-4 md:flex">
            <Button asChild variant={"outline"}>
              <Link href="/login">Login</Link>
            </Button>
            <Button asChild>
              <Link href="/login">Register</Link>
            </Button>
          </div>
        )}

        <div className="md:hidden">
          <MobileNav user={user} />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
