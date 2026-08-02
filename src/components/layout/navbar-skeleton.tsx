import { Skeleton } from "../ui/skeleton";

const NavbarSkeleton = () => {
  return (
    <header className="border-b">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Skeleton className="h-8 w-32" />
        <Skeleton className="h-8 w-20" />
      </div>
    </header>
  );
};

export default NavbarSkeleton;
