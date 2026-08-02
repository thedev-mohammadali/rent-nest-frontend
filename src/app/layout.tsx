import Footer from "@/components/layout/footer";
import Navbar from "@/components/layout/navbar";
import NavbarSkeleton from "@/components/layout/navbar-skeleton";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { ReactNode, Suspense } from "react";
import "./globals.css";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Rent Nest",
  description: "Find your desired destination",
};

const RootLayout = async ({
  children,
}: Readonly<{
  children: ReactNode;
}>) => {
  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased", "font-sans", geist.variable)}
    >
      <body className="flex min-h-full scrollbar-gutter-both flex-col">
        <Suspense fallback={<NavbarSkeleton />}>
          <Navbar />
        </Suspense>

        {children}

        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
