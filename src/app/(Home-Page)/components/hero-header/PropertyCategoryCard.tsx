import { Button } from "@/components/ui/button";
import * as card from "@/components/ui/card";
import { toPersianDigits } from "@/utils/convertNumbers";
import connectToDB from "@configs/database";
import PropertyDetailModel from "@models/PropertyDetail";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface PropertyCategoryCardProps {
  image: string;
  title: string;
  linkTo: string;
  categoryID: string;
}

const PropertyCategoryCard = async ({
  image,
  title,
  linkTo,
  categoryID,
}: PropertyCategoryCardProps) => {
  await connectToDB();

  const count = await PropertyDetailModel.countDocuments({
    propertyCategory: categoryID,
  });

  const persianCount = toPersianDigits(String(count));

  return (
    <card.Card className="grow w-60 max-h-80 lg:max-h-max aspect-square p-0 border-0 overflow-hidden relative bg-transparent">
      <card.CardHeader className="relative h-full p-0">
        <Image
          className="object-cover object-center"
          alt="property category image"
          sizes="600px"
          src={image}
          priority
          fill
        />
      </card.CardHeader>

      <card.CardContent className="absolute bottom-0 w-full p-4">
        <div className="flex items-center justify-between bg-card w-full rounded-xl p-2 md:p-4">
          <div>
            <h2 className="md:text-lg font-semibold">{title}</h2>
            <p className="text-sm md:text-base text-muted-foreground">
              +{persianCount}ملک
            </p>
          </div>

          <Button size="icon" className="md:p-6" asChild>
            <Link href={linkTo}>
              <ArrowLeft className="size-4 md:size-6" />
            </Link>
          </Button>
        </div>
      </card.CardContent>
    </card.Card>
  );
};

export default PropertyCategoryCard;
