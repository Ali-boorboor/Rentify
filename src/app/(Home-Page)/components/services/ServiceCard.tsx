import React from "react";
import Image from "next/image";
import * as card from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface ServiceCardProps {
  image: string;
  title: string;
  description: string;
  buttonTitle: string;
  // buttonHref: string;
}

const ServiceCard = ({
  image,
  title,
  description,
  buttonTitle,
}: ServiceCardProps) => {
  return (
    <card.Card className="grow w-60 aspect-square border-0 justify-between md:nth-[2]:scale-y-105">
      <card.CardHeader className="basis-1/2">
        <Image
          className="object-cover object-center w-full h-full"
          alt="service image"
          height={600}
          width={600}
          src={image}
        />
      </card.CardHeader>

      <card.CardContent className="flex flex-col basis-1/2 justify-between gap-4">
        <div className="text-center space-y-4">
          <h4 className="md:text-lg font-semibold">{title}</h4>

          <p className="text-sm md:text-base line-clamp-3 text-muted-foreground">{description}</p>
        </div>

        <Button className="w-full">{buttonTitle}</Button>
      </card.CardContent>
    </card.Card>
  );
};

export default ServiceCard;
