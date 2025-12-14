"use client";

import React from "react";
import Link from "next/link";
import adminPanelLinks from "@adminPanel/constants/adminPanelLinks";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const ACTIVE_LINK_STYLE = cn(
  "justify-start bg-card border shadow-sm rounded-xl relative",
  "after:absolute after:right-0 after:h-6 after:w-1 after:bg-primary after:top-0 after:bottom-0 after:m-auto after:rounded-xl",
  "[&_svg]:stroke-primary"
);

const LinkButtons = () => {
  const pathname = usePathname();

  return (
    <>
      {adminPanelLinks.map((link) => (
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
            <span className="hidden md:inline">{link.faTitle}</span>
          </Link>
        </Button>
      ))}
    </>
  );
};

export default LinkButtons;
