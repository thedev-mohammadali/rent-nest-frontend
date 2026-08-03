"use client";

import { Button } from "@/components/ui/button";

type Props = {
  reset: () => void;
};

const Error = ({ reset }: Props) => {
  return (
    <div className="flex min-h-96 flex-col items-center justify-center gap-4">
      <h2 className="text-xl font-semibold">Something went wrong</h2>

      <p className="text-muted-foreground">
        We couldn&apos;t load your dashboard data.
      </p>

      <Button onClick={reset}>Try Again</Button>
    </div>
  );
};

export default Error;
