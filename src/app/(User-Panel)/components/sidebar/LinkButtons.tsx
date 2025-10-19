"use client";

import React from "react";
import Link from "next/link";
import userPanelLinks from "@userPanel/constants/userPanelLinks";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const ACTIVE_LINK_STYLE = cn(
  "justify-start bg-card border shadow-sm rounded-xl relative",
  "after:absolute after:right-0 after:h-6 after:w-1 after:bg-primary after:top-0 after:bottom-0 after:m-auto after:rounded-xl",
  "after:transition-all after:duration-200 after:ease-linear",
  "[&_svg]:transition-all [&_svg]:duration-200 [&_svg]:ease-linear [&_svg]:stroke-primary"
);

const LinkButtons = () => {
  const pathname = usePathname();

  return (
    <>
      {userPanelLinks.map((link) => (
        <Button
          className={cn(
            pathname.includes(link.href) && ACTIVE_LINK_STYLE,
            "grow justify-center md:justify-start",
            "[&_svg:not([class*='size-'])]:size-5"
          )}
          variant="link"
          key={link.id}
          asChild
        >
          <Link href={link.href}>
            {link.icon}
            <span className="hidden md:inline">{link.title}</span>
          </Link>
        </Button>
      ))}
    </>
  );
};

export default LinkButtons;
