import BrandSection from "@/components/footer/BrandSection";
import LinksSection from "@/components/footer/LinksSection";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-card text-muted-foreground mt-10 md:mt-20 py-6 px-4 border-t">
      <div className="container m-auto flex flex-wrap-reverse md:flex-nowrap items-center justify-between gap-6">
        <BrandSection />

        <LinksSection />
      </div>

      <p className="text-sm md:text-base text-center mt-4">
        ساخته شده با 💙 توسط{" "}
        <span className="text-primary text-nowrap font-medium">علی بوربور</span>
      </p>
    </footer>
  );
};

export default Footer;
