import Header from "@/components/header";
import Footer from "@/components/footer";
import { LayoutProps } from "@/types";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rentify | Property Comparison",
};

export default function PageLayout({ children }: LayoutProps) {
  return (
    <>
      <Header />

      <main className="min-h-[60svh]">{children}</main>

      <Footer />
    </>
  );
}
