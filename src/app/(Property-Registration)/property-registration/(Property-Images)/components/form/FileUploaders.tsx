"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ImagePlus, X } from "lucide-react";
import { cn } from "@/lib/utils";

const FileUploaders = () => {
  const [uploadedImages, setUploadedImages] = useState<(string | null)[]>(
    Array(6).fill(null)
  );

  const handleImageChange = (
    index: number,
    file?: File,
    input?: HTMLInputElement
  ) => {
    if (!file) return;

    const newImages = [...uploadedImages];
    newImages[index] = URL.createObjectURL(file);
    setUploadedImages(newImages);

    if (input) input.value = "";
  };

  const handleRemoveImage = (index: number) => {
    const newImages = [...uploadedImages];
    newImages[index] = null;
    setUploadedImages(newImages);
  };

  useEffect(() => {
    return () => {
      uploadedImages.forEach(
        (imageUrl) => imageUrl && URL.revokeObjectURL(imageUrl)
      );
    };
  }, [uploadedImages]);

  return (
    <div className="grow flex flex-wrap gap-6">
      {uploadedImages.map((image, index) => (
        <div
          key={index}
          className={cn(
            "relative min-w-44 aspect-square flex-1 flex justify-center items-center rounded-xl overflow-hidden border-2",
            image ? "border-primary" : "border-dashed"
          )}
        >
          <Label
            htmlFor={`image-${index}`}
            className="w-full h-full flex justify-center items-center cursor-pointer"
          >
            <Input
              onChange={(e) =>
                handleImageChange(index, e.target.files?.[0], e.target)
              }
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
