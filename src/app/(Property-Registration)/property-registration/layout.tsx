import Footer from "@/components/footer";
import Header from "@/components/header";
import Sidebar from "@propertyRegistration/components/sidebar";
import Authenticate from "@propertyRegistration/components/Authenticate";
import { LayoutProps } from "@/types";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rentify | Property Registration",
};

export default function PageLayout({ children }: LayoutProps) {
  return (
    <>
      <Header />

      <main className="flex flex-wrap gap-6 min-h-[60svh] container m-auto p-4 sm:p-0">
        <Sidebar />

        {children}
      </main>

      <Authenticate />

      <Footer />
    </>
  );
}
