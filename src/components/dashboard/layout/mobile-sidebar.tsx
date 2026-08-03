"use client";

import { Menu } from "lucide-react";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

import { Button } from "@/components/ui/button";

import Link from "next/link";

import { sidebarItems } from "./sidebar-config";

import { UserRole } from "@/types/auth";

type Props = {
  role: UserRole;
};

const MobileSidebar = ({ role }: Props) => {
  const items = sidebarItems[role];

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu />
        </Button>
      </SheetTrigger>

      <SheetContent side="left" className="w-64">
        <div className="mt-6">
          <h2 className="mb-6 text-xl font-bold">RentNest</h2>

          <nav className="space-y-2">
            {items.map((item) => {
              const Icon = item.icon;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="hover:bg-muted flex items-center gap-3 rounded-lg px-3 py-2 text-sm"
                >
                  <Icon className="h-5 w-5" />

                  {item.title}
                </Link>
              );
            })}
          </nav>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileSidebar;
