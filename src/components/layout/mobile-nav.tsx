"use client";

import { Button } from "@/components/ui/button";
import { User } from "@/types/auth";
import { Menu } from "lucide-react";
import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";

const MobileNav = ({ user }: { user: User | null }) => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant={"outline"}
          size={"icon-lg"}
          aria-label="Open navigation menu"
        >
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle className="text-xl font-semibold">RentNest</SheetTitle>
        </SheetHeader>
        <nav className="flex flex-col gap-4 p-6">
          <Button variant={"outline"} asChild>
            <Link href="/properties">Properties</Link>
          </Button>
          <Button variant={"outline"} asChild>
            <Link href="/about">About</Link>
          </Button>
          <Button variant={"outline"} asChild>
            <Link href="/contact">Contact</Link>
          </Button>
        </nav>

        <SheetFooter>
          {user ? (
            <Button className="mx-auto w-1/2" asChild>
              <Link href="/logout">Logout</Link>
            </Button>
          ) : (
            <div className="flex items-center gap-2 p-6">
              <Button variant={"outline"} className="w-1/2" asChild>
                <Link href="/login">Login</Link>
              </Button>
              <Button className="w-1/2" asChild>
                <Link href="/register">Register</Link>
              </Button>
            </div>
          )}
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
