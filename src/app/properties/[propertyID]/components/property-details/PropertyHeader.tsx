import React from "react";
import { Clock, Flag, Heart, MapPin, Share2 } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

const PropertyHeader = () => {
  return (
    <div className="space-y-4 md:space-y-8">
      <div className="space-y-2">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <h1 className="text-lg md:text-2xl font-semibold">
            آپارتمان ۷۰ متری ۲ خوابه _ تهران محمدیه
          </h1>

          <div className="space-x-2">
            <Button variant="link" size="icon">
              <Share2 className="size-4.5" />
            </Button>

            <Button className="bg-muted" variant="link" size="icon">
              <Heart className="size-4.5 fill-muted stroke-destructive" />
              {/* change fill to fill-destructive when user liked this property */}
            </Button>
          </div>
        </div>

        <div className="flex gap-2 max-w-60 h-9 text-sm md:text-base font-normal text-muted-foreground">
          <p className="flex items-center gap-2">
            <Clock className="size-4.5" />
            تهران-الهیه
          </p>

          <Separator orientation="vertical" />

          <p className="flex items-center gap-2">
            <MapPin className="size-4.5" />
            ۱۱ روز بیش
          </p>
        </div>
      </div>

      <div className="text-base md:text-lg font-medium space-y-2 mb-">
        <p>رهن ۴,۰۰۰,۰۰۰,۰۰۰ تومان</p>

        <p>اجاره ۵۰,۰۰۰,۰۰۰ تومان</p>
      </div>

      <div className="space-y-1">
        <Separator />

        <div className="flex items-center justify-between">
          <p className="text-sm md:text-base font-normal">شناسه آگهی: ۵۴۳۶</p>

          <Button variant="link">
            <Flag className="size-4.5" />
            گزارش
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PropertyHeader;
