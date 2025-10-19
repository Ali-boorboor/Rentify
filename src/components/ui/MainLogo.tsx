import React from "react";
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
    <div className={cn("relative w-32 md:w-52 aspect-video", className)}>
      <Image
        className="object-contain object-center"
        alt="main logo image"
        sizes="200px"
        src={src}
        priority
        fill
      />
    </div>
  );
};

export default MainLogo;
