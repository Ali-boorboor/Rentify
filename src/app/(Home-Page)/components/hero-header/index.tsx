import React from "react";
import SearchForm from "@home/components/hero-header/SearchForm";
import PropertyCategories from "@home/components/hero-header/PropertyCategories";
import { NavigationMenu } from "@/components/header";
import { cn } from "@/lib/utils";

const backgroundImage =
  "bg-[url('/images/png/home-page/hero-header-background.png')]";

const HeroHeader = () => {
  return (
    <header
      className={cn(
        backgroundImage,
        "bg-no-repeat bg-cover text-card min-h-[90svh] rounded-b-4xl px-4",
        "flex flex-col gap-20 md:gap-40 justify-between items-center"
      )}
    >
      <NavigationMenu />

      <section className="flex flex-col gap-6 justify-center items-center">
        <h1 className="text-2xl md:text-4xl font-bold text-center">
          در <span className="text-primary">رنتی‌فای</span> دنبال چه ملکی هستید؟
        </h1>

        <SearchForm />
      </section>

      <PropertyCategories />
    </header>
  );
};

export default HeroHeader;
