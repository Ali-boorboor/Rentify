import React from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface MainLogoProps {
  src?: string;
  className?: string;
}

const MainLogo = ({
  src = "/images/png/black-main-logo.png",
  className,
}: MainLogoProps) => {
  return (
    <Link
      className={cn("relative w-32 md:w-52 aspect-video", className)}
      href="/"
    >
      <Image
        className="object-contain object-center"
        alt="main logo image"
        sizes="200px"
        src={src}
        priority
        fill
      />
    </Link>
  );
};

export default MainLogo;
