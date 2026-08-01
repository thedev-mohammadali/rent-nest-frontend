"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useTransition } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & {
    digest?: string;
  };

  reset: () => void;
}) {
  const [isPending, startTransition] = useTransition();

  const handleRetry = () => {
    startTransition(() => {
      reset();
    });
  };

  return (
    <div className="container mx-auto px-4 py-20 text-center">
      <h2 className="text-2xl font-bold">Something went wrong</h2>

      <p className="text-muted-foreground mt-4">
        We couldn&apos;t load this property. Please try again.
      </p>

      <div className="mt-6 flex items-center justify-center gap-4">
        <Button onClick={handleRetry} disabled={isPending}>
          {isPending ? "Retrying" : "Try Again"}
        </Button>
        <Button asChild variant={"outline"}>
          <Link href={"/"}>Home Page</Link>
        </Button>
      </div>
    </div>
  );
}
