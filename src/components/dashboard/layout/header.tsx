import { getCurrentUser } from "@/services/auth.server";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";

import { Badge } from "@/components/ui/badge";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import LogoutButton from "@/components/auth/logout-button";
import MobileSidebar from "./mobile-sidebar";

const Header = async () => {
  const user = await getCurrentUser();

  if (!user) {
    return null;
  }

  const initials = user.name
    ?.split(" ")
    .map((item) => item[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <header className="flex h-16 items-center justify-between border-b px-6">
      <div className="flex items-center gap-2">
        <MobileSidebar role={user.role} />
      </div>
      <DropdownMenu>
        <DropdownMenuTrigger className="flex items-center gap-3 rounded-lg outline-none">
          <Avatar>
            <AvatarFallback>{initials ?? "U"}</AvatarFallback>
          </Avatar>

          <div className="hidden text-left md:block">
            <p className="text-sm font-medium">{user.name}</p>

            <Badge variant="secondary" className="text-xs">
              {user.role}
            </Badge>
          </div>
        </DropdownMenuTrigger>

        <DropdownMenuContent align="end" className="w-48">
          <div className="p-2">
            <LogoutButton />
          </div>
        </DropdownMenuContent>
      </DropdownMenu>
    </header>
  );
};

export default Header;
