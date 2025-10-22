import NavigationMenu from "@/components/header/NavigationMenu";
import React from "react";

const LOGO_SRC = "/images/png/black-main-logo.png";

const Header = () => {
  return (
    <header className="pb-10 md:pb-20 px-4 sticky top-0 z-50">
      <NavigationMenu
        className="bg-card text-card-foreground py-2 px-6 mt-6 rounded-xl shadow-sm border"
        logoSrc={LOGO_SRC}
      />
    </header>
  );
};

export default Header;
