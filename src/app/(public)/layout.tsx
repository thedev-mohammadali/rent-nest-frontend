import Footer from "@/components/layout/footer";
import Navbar from "@/components/layout/navbar";
import NavbarSkeleton from "@/components/layout/navbar-skeleton";
import { ReactNode, Suspense } from "react";

const PublicLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex min-h-screen flex-col">
      <Suspense fallback={<NavbarSkeleton />}>
        <Navbar />
      </Suspense>

      <main className="flex-1">{children}</main>

      <Footer />
    </div>
  );
};

export default PublicLayout;
