import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface MainLogoProps {
  className?: string;
}

const MAIN_LOGO_SRC = "/images/png/main-logo.png";

const MainLogo = ({ className }: MainLogoProps) => {
  return (
    <div className={cn("relative w-32 md:w-52 aspect-video", className)}>
      <Image
        className="object-contain object-center"
        alt="main logo image"
        src={MAIN_LOGO_SRC}
        sizes="200px"
        fill
      />
    </div>
  );
};

export default MainLogo;
