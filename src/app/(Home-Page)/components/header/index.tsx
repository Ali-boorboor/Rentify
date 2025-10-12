import React from "react";
import NavMenu from "@/components/NavMenu";
import SearchForm from "@homePage/components/header/SearchForm";
import PropertyCategoryList from "@homePage/components/header/PropertyCategoryList";
import { cn } from "@/lib/utils";

const Header = () => {
  return (
    <header
      className={cn(
        "bg-[url('/images/png/home-page/header-background.png')] bg-no-repeat bg-cover min-h-[90svh] rounded-b-4xl px-4 text-white",
        "flex flex-col gap-20 md:gap-40 justify-between items-center"
      )}
    >
      <NavMenu />

      <section className="flex flex-col gap-4 md:gap-8 justify-center items-center">
        <h1 className="text-2xl md:text-4xl font-bold text-center">
          در <span className="text-primary">رنتی‌فای</span> دنبال چه ملکی هستید؟
        </h1>

        <SearchForm />
      </section>

      <PropertyCategoryList />
    </header>
  );
};

export default Header;
