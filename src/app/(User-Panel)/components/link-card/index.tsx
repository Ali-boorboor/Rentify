import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface LinkCardProps {
  title: string;
  icon: React.ReactNode;
  href: string;
}

const LinkCard = ({ title, icon, href }: LinkCardProps) => {
  return (
    <Button
      className={cn(
        "w-40 h-40 md:w-80 md:h-80 grow flex flex-col gap-6 items-center justify-center text-foreground rounded-xl",
        "[&_svg:not([class*='size-'])]:size-6 md:[&_svg:not([class*='size-'])]:size-8"
      )}
      variant="outline"
      asChild
    >
      <Link href={href}>
        <div
          className={cn(
            "bg-accent text-accent-foreground w-16 h-16 md:w-20 md:h-20 rounded-full",
            "flex justify-center items-center"
          )}
        >
          {icon}
        </div>

        <p className="md:text-lg font-semibold">{title}</p>
      </Link>
    </Button>
  );
};

export default LinkCard;
