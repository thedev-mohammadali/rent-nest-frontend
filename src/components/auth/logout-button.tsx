"use client";

import { useRouter } from "next/navigation";

import { logout } from "@/services/auth.client";

import { Button } from "@/components/ui/button";

const LogoutButton = () => {
  const router = useRouter();

  const handleLogout = async () => {
    await logout();

    router.replace("/login");

    router.refresh();
  };

  return (
    <Button
      variant="ghost"
      className="w-full justify-start"
      onClick={handleLogout}
    >
      Logout
    </Button>
  );
};

export default LogoutButton;
