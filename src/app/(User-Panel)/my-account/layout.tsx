import Header from "@/components/header";
import Footer from "@/components/footer";
import authenticate from "@/utils/authenticate";
import Sidebar from "@userPanel/components/sidebar";
import { redirect, RedirectType } from "next/navigation";
import { LayoutProps } from "@/types";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rentify | My-Account",
};

export default async function PageLayout({ children }: LayoutProps) {
  const isUserLogin = await authenticate();

  if (!isUserLogin) redirect("/login-register", RedirectType.replace);

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
