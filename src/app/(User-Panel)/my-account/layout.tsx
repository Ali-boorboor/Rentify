import Header from "@/components/header";
import Footer from "@/components/footer";
import Sidebar from "@userPanel/components/sidebar";
import { LayoutProps } from "@/types";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rentify | My-Account",
};

export default function PageLayout({ children }: LayoutProps) {
  return (
    <>
      <Header />

      <main className="flex flex-col items-start md:flex-row gap-10 md:gap-20 min-h-[60svh] container m-auto p-4 sm:p-0">
        <Sidebar />

        {children}
      </main>

      <Footer />
    </>
  );
}
