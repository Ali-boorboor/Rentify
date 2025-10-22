import AuthLayoutImage from "@loginRegister/components/auth-layout-image";
import { LayoutProps } from "@/types";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rentify | Login - Register",
};

export default function PageLayout({ children }: LayoutProps) {
  return (
    <main className="bg-primary/15 flex gap-6 justify-between items-center min-h-svh p-4">
      {children}

      <AuthLayoutImage />
    </main>
  );
}
