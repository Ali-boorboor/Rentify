import React from "react";
import MainLogo from "@/components/MainLogo";
import menuDatas from "@/constants/menuDatas";
import MobileMenu from "@/components/MobileMenu";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavMenuProps {
  logoSrc?: string;
  className?: string;
}

const NavMenu = ({
  logoSrc = "/images/png/white-main-logo.png",
  className,
}: NavMenuProps) => {
  return (
    <nav
      className={cn(
        "container m-auto flex justify-between items-center p-4 text-white",
        className
      )}
    >
      <MainLogo className="w-24 md:w-32" src={logoSrc} />

      <ul className="hidden lg:flex items-center gap-1">
        {menuDatas.map((item) => (
          <li key={item.id}>
            <Button className="lg:text-base" variant="link">
              {item.title}
            </Button>
          </li>
        ))}
      </ul>

      <MobileMenu />

      <div className="hidden lg:flex items-center gap-1">
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

export default NavMenu;
