import React from "react";
import UserInfo from "@userPanel/components/sidebar/UserInfo";
import LinkButtons from "@userPanel/components/sidebar/LinkButtons";
import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";
import { cn } from "@/lib/utils";

const Sidebar = () => {
  return (
    <aside className="w-full md:w-72 shrink-0 sticky -top-4 md:top-28 bg-card border shadow-sm rounded-xl px-4 py-4 md:py-8">
      <nav className="flex flex-wrap md:flex-col gap-6">
        <UserInfo />

        <LinkButtons />

        <Button
          className={cn(
            "grow justify-center md:justify-start text-destructive [&_svg]:stroke-destructive",
            "[&_svg:not([class*='size-'])]:size-5"
          )}
          variant="link"
        >
          <LogOut />
          <span className="hidden md:inline">خروج از حساب کاربری</span>
        </Button>
      </nav>
    </aside>
  );
};

export default Sidebar;
