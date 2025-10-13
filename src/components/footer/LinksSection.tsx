import React from "react";
import { linkGroups } from "@/constants/footerDatas";

const LinksSection = () => {
  return (
    <div className="flex flex-wrap justify-around items-start gap-6 basis-full md:basis-2/3">
      {linkGroups.map((linkGroup) => (
        <ul className="space-y-2 text-center sm:text-right" key={linkGroup.id}>
          <li>
            <h6 className="text-primary font-semibold md:text-lg">
              {linkGroup.title}
            </h6>
          </li>

          {linkGroup.links.map((link) => (
            <li
              className="text-sm md:text-base hover:text-card-foreground transition-all duration-200 ease-linear"
              key={link.id}
            >
              {link.title}
            </li>
          ))}
        </ul>
      ))}
    </div>
  );
};

export default LinksSection;
