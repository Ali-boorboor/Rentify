import React from "react";
import Link from "next/link";
import menuItems from "@/constants/menuDatas";
import authenticate from "@/utils/authenticate";
import MainLogo from "@/components/ui/MainLogo";
import MobileMenu from "@/components/header/MobileMenu";
import { Button } from "@/components/ui/button";
import { Plus, UserRound } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavigationMenuProps {
  logoSrc?: string;
  className?: string;
}

const NavigationMenu = async ({
  logoSrc = "/images/png/white-main-logo.png",
  className,
}: NavigationMenuProps) => {
  const isUserLogin = await authenticate();

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
            <Button className="lg:text-base" variant="link" asChild>
              <Link href={item.href}>{item.title}</Link>
            </Button>
          </li>
        ))}
      </ul>

      <MobileMenu />

      <div className="hidden lg:flex items-center gap-2">
        {isUserLogin ? (
          <Button variant="link" asChild>
            <Link href="/my-account/edit-infos">
              <UserRound />
              حساب من
            </Link>
          </Button>
        ) : (
          <Button variant="link" asChild>
            <Link href="/login-register">ورود | ثبت‌نام</Link>
          </Button>
        )}

        <Button asChild>
          <Link href="/property-registration/property-type">
            <Plus className="size-4" />
            ثبت آگهی رایگان
          </Link>
        </Button>
      </div>
    </nav>
  );
};

export default NavigationMenu;
