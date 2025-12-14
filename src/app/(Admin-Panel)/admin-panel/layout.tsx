import UserModel from "@models/User";
import Header from "@/components/header";
import Footer from "@/components/footer";
import authenticate from "@/utils/authenticate";
import Sidebar from "@adminPanel/components/Sidebar";
import { notFound, redirect, RedirectType } from "next/navigation";
import { LayoutProps } from "@/types";

export default async function PageLayout({ children }: LayoutProps) {
  const authenticatedUser = await authenticate();

  if (!authenticatedUser) redirect("/login-register", RedirectType.replace);

  const user = await UserModel.findOne({
    phone: authenticatedUser?.phone,
  }).lean();

  if (user?.role !== "ADMIN") return notFound();

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
