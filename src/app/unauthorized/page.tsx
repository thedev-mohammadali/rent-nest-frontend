import { Button } from "@/components/ui/button";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Unauthorized | RentNest",
  description: "You do not have permission to access this page.",
};

const UnauthorizedPage = () => {
  return (
    <main className="flex flex-1 items-center justify-center px-4">
      <div className="flex max-w-md flex-col items-center gap-6 text-center">
        <h1 className="text-6xl font-bold">403</h1>

        <div>
          <h2 className="text-2xl font-semibold">Access Denied</h2>

          <p className="text-muted-foreground mt-2">
            You do not have permission to access this page.
          </p>
        </div>

        <Button asChild>
          <Link href="/">Go Home</Link>
        </Button>
      </div>
    </main>
  );
};

export default UnauthorizedPage;
