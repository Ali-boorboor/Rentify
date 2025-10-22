import React from "react";
import MainLogo from "@/components/ui/MainLogo";
import menuItems from "@/constants/menuDatas";
import MobileMenu from "@/components/header/MobileMenu";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavigationMenuProps {
  logoSrc?: string;
  className?: string;
}

const NavigationMenu = ({
  logoSrc = "/images/png/white-main-logo.png",
  className,
}: NavigationMenuProps) => {
  return (
    <nav
      className={cn(
        "container m-auto flex justify-between items-center py-4",
        className
      )}
    >
      <MainLogo className="w-24 md:w-32" src={logoSrc} />

      <ul className="hidden lg:flex items-center gap-2">
        {menuItems.map((item) => (
          <li key={item.id}>
            <Button className="lg:text-base" variant="link">
              {item.title}
            </Button>
          </li>
        ))}
      </ul>

      <MobileMenu />

      <div className="hidden lg:flex items-center gap-2">
        <Button variant="link">ورود | ثبت‌نام</Button>
        {/* <Button variant="link"> ! show when user is login !
          <UserRound />
          حساب من
        </Button> */}

        <Button>
          <Plus className="size-4" />
          ثبت آگهی رایگان
        </Button>
      </div>
    </nav>
  );
};

export default NavigationMenu;
