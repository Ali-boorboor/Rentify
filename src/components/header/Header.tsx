import NavigationMenu from "@/components/header/NavigationMenu";
import React from "react";

const LOGO_SRC = "/images/png/black-main-logo.png";

const Header = () => {
  return (
    <header className="pt-6 pb-6 md:pb-10 px-4 sticky top-0 z-50">
      {/* set pt-6 to pt-0 when user scroll */}
      <NavigationMenu
        className="bg-card text-card-foreground py-2 px-6 rounded-xl shadow-sm border"
        logoSrc={LOGO_SRC}
      />
    </header>
  );
};

export default Header;
