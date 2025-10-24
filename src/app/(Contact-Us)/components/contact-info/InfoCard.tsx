import React from "react";
import { cn } from "@/lib/utils";

interface InfoCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const InfoCard = ({ icon, title, description }: InfoCardProps) => {
  return (
    <div className="grow flex flex-col gap-6 items-center justify-center bg-card text-card-foreground border shadow-sm rounded-xl p-4">
      <div
        className={cn(
          "bg-accent text-accent-foreground w-16 h-16 md:w-20 md:h-20 rounded-full",
          "flex justify-center items-center",
          "[&_svg]:size-6 md:[&_svg]:size-8"
        )}
      >
        {icon}
      </div>

      <div className="text-center w-44 space-y-2">
        <h2 className="text-lg font-semibold">{title}</h2>

        <p className="text-muted-foreground text-sm font-normal line-clamp-2">
          {description}
        </p>
      </div>
    </div>
  );
};

export default InfoCard;
