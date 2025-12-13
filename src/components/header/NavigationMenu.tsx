"use client";

import React from "react";
import Link from "next/link";
import menuItems from "@/constants/menuDatas";
import MainLogo from "@/components/ui/MainLogo";
import useAuthenticate from "@/hook/useAuthenticate";
import MobileMenu from "@/components/header/MobileMenu";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import { Plus, UserRound } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavigationMenuProps {
  logoSrc?: string;
  className?: string;
}

const NavigationMenu = ({
  logoSrc = "/images/png/white-main-logo.png",
  className,
}: NavigationMenuProps) => {
  const { data, isPending } = useAuthenticate();

  const isUserLogin = data?.status === 200;

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

      <MobileMenu isUserLogin={isUserLogin} isPending={isPending} />

      <div className="hidden lg:flex items-center gap-2">
        {isPending ? (
          <Skeleton className="w-26 h-9 rounded-md" />
        ) : isUserLogin ? (
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
