import HeroHeader from "@homePage/components/hero-header";
import Footer from "@/components/footer";
import { LayoutProps } from "@/types";

export default function PageLayout({ children }: LayoutProps) {
  return (
    <>
      <HeroHeader />

      <main className="mt-10 lg:mt-40 px-4 flex flex-col gap-10 md:gap-20">
        {children}
      </main>

      <Footer />
    </>
  );
}
