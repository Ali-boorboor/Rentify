import Footer from "@/components/footer";
import Header from "@/components/header";
import authenticate from "@/utils/authenticate";
import Sidebar from "@propertyRegistration/components/sidebar";
import { redirect, RedirectType } from "next/navigation";
import { LayoutProps } from "@/types";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rentify | Property Registration",
};

export default async function PageLayout({ children }: LayoutProps) {
  const isUserLogin = await authenticate();

  if (!isUserLogin) redirect("/", RedirectType.replace);

  return (
    <>
      <Header />

      <main className="flex flex-wrap gap-6 min-h-[60svh] container m-auto p-4 sm:p-0">
        <Sidebar />

        {children}
      </main>

      <Footer />
    </>
  );
}
