import Header from "@/components/header";
import Footer from "@/components/footer";
import { LayoutProps } from "@/types";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rentify | Properties",
};

export default function PageLayout({ children }: LayoutProps) {
  return (
    <>
      <Header />

      <main className="flex flex-col gap-10 md:gap-20 min-h-[60svh]">
        {children}
      </main>

      <Footer />
    </>
  );
}
