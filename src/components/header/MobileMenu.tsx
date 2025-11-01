import React from "react";
import Link from "next/link";
import * as icon from "lucide-react";
import menuItems from "@/constants/menuDatas";
import authenticate from "@/utils/authenticate";
import * as dropdownMenu from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

const MobileMenu = async () => {
  const isUserLogin = await authenticate();

  return (
    <div className="block lg:hidden">
      <dropdownMenu.DropdownMenu dir="rtl">
        <dropdownMenu.DropdownMenuTrigger asChild>
          <Button size="icon">
            <icon.TextAlignJustify className="size-fit" />
          </Button>
        </dropdownMenu.DropdownMenuTrigger>

        <dropdownMenu.DropdownMenuContent className="w-60 md:w-80 text-center">
          <dropdownMenu.DropdownMenuLabel>منو</dropdownMenu.DropdownMenuLabel>

          {menuItems.map((item) => (
            <div key={item.id}>
              <dropdownMenu.DropdownMenuSeparator />
              <dropdownMenu.DropdownMenuItem
                className="cursor-pointer justify-center"
                asChild
              >
                <Link href={item.href}>{item.title}</Link>
              </dropdownMenu.DropdownMenuItem>
            </div>
          ))}

          <dropdownMenu.DropdownMenuSeparator />
          <dropdownMenu.DropdownMenuItem
            className="cursor-pointer justify-center"
            asChild
          >
            <Button className="w-full" asChild>
              <Link href="/property-registration/property-type">
                <icon.Plus className="size-4 text-inherit" />
                ثبت آگهی رایگان
              </Link>
            </Button>
          </dropdownMenu.DropdownMenuItem>

          <dropdownMenu.DropdownMenuSeparator />

          {isUserLogin ? (
            <dropdownMenu.DropdownMenuItem
              className="cursor-pointer justify-center"
              asChild
            >
              <Button className="w-full" asChild>
                <Link href="/my-account/edit-infos">
                  <icon.UserRound className="size-4 text-inherit" />
                  حساب من
                </Link>
              </Button>
            </dropdownMenu.DropdownMenuItem>
          ) : (
            <dropdownMenu.DropdownMenuItem
              className="cursor-pointer justify-center"
              asChild
            >
              <Button className="w-full" asChild>
                <Link href="/login-register">ورود | ثبت‌نام</Link>
              </Button>
            </dropdownMenu.DropdownMenuItem>
          )}
        </dropdownMenu.DropdownMenuContent>
      </dropdownMenu.DropdownMenu>
    </div>
  );
};

export default MobileMenu;
