import { Button } from "@/components/ui/button";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyTitle,
} from "@/components/ui/empty";
import Link from "next/link";

const NotFound = () => {
  return (
    <Empty className="container mx-auto px-4 py-20">
      <EmptyHeader>
        <EmptyTitle className="text-2xl">404 - Not Found</EmptyTitle>
        <EmptyDescription>
          The property you&apos;re looking for may have been removed or is no
          longer available.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <Button asChild>
          <Link href={"/"}>Home</Link>
        </Button>
      </EmptyContent>
    </Empty>
  );
};

export default NotFound;
