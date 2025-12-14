import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { toPersianDigits } from "@/utils/convertNumbers";

interface LinkCardProps {
  title: string;
  href: string;
  count: number;
}

const LinkCard = ({ title, href, count }: LinkCardProps) => {
  const persianCount = toPersianDigits(count);

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
        <p className="md:text-lg font-semibold">{title}</p>

        <Button size="icon">{persianCount}</Button>
      </Link>
    </Button>
  );
};

export default LinkCard;
