import Navbar from "@/components/layout/Navbar";
import { ReactNode } from "react";

const PublicLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Navbar />

      <main>{children}</main>
    </>
  );
};

export default PublicLayout;
