import React from "react";
import menuDatas from "@/constants/menuDatas";
import * as dropdownMenu from "@/components/ui/dropdown-menu";
import { Plus, TextAlignJustify } from "lucide-react";
import { Button } from "@/components/ui/button";

const MobileMenu = () => {
  return (
    <div className="block lg:hidden">
      <dropdownMenu.DropdownMenu dir="rtl">
        <dropdownMenu.DropdownMenuTrigger asChild>
          <Button size="icon">
            <TextAlignJustify className="size-fit" />
          </Button>
        </dropdownMenu.DropdownMenuTrigger>

        <dropdownMenu.DropdownMenuContent className="w-60 md:w-80 text-center">
          <dropdownMenu.DropdownMenuLabel>منو</dropdownMenu.DropdownMenuLabel>

          {menuDatas.map((item) => (
            <div key={item.id}>
              <dropdownMenu.DropdownMenuSeparator />
              <dropdownMenu.DropdownMenuItem className="cursor-pointer justify-center">
                {item.title}
              </dropdownMenu.DropdownMenuItem>
            </div>
          ))}

          <dropdownMenu.DropdownMenuSeparator />
          <dropdownMenu.DropdownMenuItem
            className="cursor-pointer justify-center"
            asChild
          >
            <Button className="w-full">
              <Plus className="size-4" />
              ثبت آگهی رایگان
            </Button>
          </dropdownMenu.DropdownMenuItem>

          <dropdownMenu.DropdownMenuSeparator />
          <dropdownMenu.DropdownMenuItem
            className="cursor-pointer justify-center"
            asChild
          >
            <Button className="w-full">ورود | ثبت‌نام</Button>
          </dropdownMenu.DropdownMenuItem>
        </dropdownMenu.DropdownMenuContent>
      </dropdownMenu.DropdownMenu>
    </div>
  );
};

export default MobileMenu;
