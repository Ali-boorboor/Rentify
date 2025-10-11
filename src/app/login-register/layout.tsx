import AuthLayoutImage from "@loginRegister/components/AuthLayoutImage";
import { LayoutProps } from "@/types";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rentify | Login - Register",
};

export default function LoginLayout({ children }: LayoutProps) {
  return (
    <main className="bg-primary/15 flex gap-4 justify-between items-center min-h-svh p-4">
      {children}

      <AuthLayoutImage />
    </main>
  );
}
