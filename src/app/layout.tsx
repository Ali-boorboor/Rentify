import "@/app/globals.css";
import QueryProvider from "@/components/providers/QueryProvider";
import { Toaster } from "@/components/ui/sonner";
import localFont from "next/font/local";
import { LayoutProps } from "@/types";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rentify",
  description: "rentify is a rent site for real estate, houses, villas and...",
};

const persianFont = localFont({
  src: "./fonts/persian-font.ttf",
});

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="fa" dir="rtl" data-scroll-behavior="smooth">
      <body className={`${persianFont.className} antialiased`}>
        <QueryProvider>{children}</QueryProvider>

        <Toaster position="top-right" />
      </body>
    </html>
  );
}
