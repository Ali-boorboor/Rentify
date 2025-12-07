import React from "react";
import Link from "next/link";
import Image from "next/image";
import * as card from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface ServiceCardProps {
  image: string;
  title: string;
  description: string;
  buttonTitle: string;
  buttonHref: string;
}

const ServiceCard = ({
  image,
  title,
  description,
  buttonTitle,
  buttonHref,
}: ServiceCardProps) => {
  return (
    <card.Card className="grow w-60 border-0 lg:nth-[2]:scale-y-105">
      <card.CardHeader>
        <Image
          className="object-cover object-center w-full h-full"
          alt="service image"
          height={600}
          width={600}
          src={image}
        />
      </card.CardHeader>

      <card.CardContent className="space-y-6">
        <div className="text-center space-y-6">
          <h4 className="md:text-lg font-semibold line-clamp-1">{title}</h4>

          <p className="text-sm md:text-base line-clamp-2 text-muted-foreground">
            {description}
          </p>
        </div>

        <Button className="w-full" asChild>
          <Link href={buttonHref}>{buttonTitle}</Link>
        </Button>
      </card.CardContent>
    </card.Card>
  );
};

export default ServiceCard;
