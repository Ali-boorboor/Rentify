"use client";

import Image from "next/image";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ImagePlus, X } from "lucide-react";
import { cn } from "@/lib/utils";

const FileUploaders = () => {
  const [images, setImages] = useState<(string | null)[]>(Array(6).fill(null));

  const handleImageChange = (index: number, file?: File) => {
    if (!file) return;

    const newImages = [...images];
    newImages[index] = URL.createObjectURL(file);
    setImages(newImages);
  };

  const handleRemoveImage = (index: number) => {
    const newImages = [...images];
    newImages[index] = null;
    setImages(newImages);
  };

  return (
    <div className="grow flex flex-wrap gap-6">
      {images.map((image, index) => (
        <div
          key={index}
          className={cn(
            "relative min-w-44 aspect-square flex-1 flex justify-center items-center rounded-xl overflow-hidden",
            image ? "ring-2 ring-primary" : "border-2 border-dashed"
          )}
        >
          <Label
            htmlFor={`image-${index}`}
            className="w-full h-full flex justify-center items-center cursor-pointer"
          >
            <Input
              onChange={(e) => handleImageChange(index, e.target.files?.[0])}
              accept="image/png, image/jpeg, image/jpg"
              id={`image-${index}`}
              type="file"
              hidden
            />

            {image ? (
              <div className="w-full h-full relative">
                <Image
                  className="object-center object-cover"
                  alt={`preview-${index}`}
                  sizes="300px"
                  src={image}
                  fill
                />
              </div>
            ) : (
              <ImagePlus className="text-muted-foreground size-10 md:size-12" />
            )}
          </Label>

          {image && (
            <Button
              onClick={() => handleRemoveImage(index)}
              className="absolute top-2 right-2 border shadow-sm"
              variant="destructive"
              size="icon-sm"
              type="button"
            >
              <X className="size-4" />
            </Button>
          )}
        </div>
      ))}
    </div>
  );
};

export default FileUploaders;
