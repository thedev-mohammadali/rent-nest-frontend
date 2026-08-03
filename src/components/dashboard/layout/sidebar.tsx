import Link from "next/link";

import { getCurrentUser } from "@/services/auth.server";
import { sidebarItems } from "./sidebar-config";

import { Separator } from "@/components/ui/separator";

const Sidebar = async () => {
  const user = await getCurrentUser();

  if (!user) {
    return null;
  }

  const items = sidebarItems[user.role];

  return (
    <aside className="bg-background hidden w-64 border-r md:block">
      <div className="flex h-full flex-col">
        <div className="p-6">
          <Link className="text-xl font-bold" href={"/"}>
            RentNest
          </Link>

          <p className="text-muted-foreground text-sm">
            {user.role.toLowerCase()}
          </p>
        </div>

        <Separator />

        <nav className="flex-1 space-y-2 p-4">
          {items.map((item) => {
            const Icon = item.icon;

            return (
              <Link
                key={item.href}
                href={item.href}
                className="hover:bg-muted flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition"
              >
                <Icon className="h-5 w-5" />

                {item.title}
              </Link>
            );
          })}
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
