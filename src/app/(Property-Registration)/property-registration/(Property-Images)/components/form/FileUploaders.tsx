"use client";

import Image from "next/image";
import React, { useEffect } from "react";
import { UploadedImage } from "@propertyImagesRegistration/types";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ImagePlus, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

const MAX_IMAGE_SIZE = 2 * 1024 * 1024;

interface FileUploadersProps {
  uploadedImages: UploadedImage[];
  setUploadedImages: (value: UploadedImage[]) => void;
}

const FileUploaders = ({
  uploadedImages,
  setUploadedImages,
}: FileUploadersProps) => {
  const handleImageChange = (
    index: number,
    file?: File,
    input?: HTMLInputElement
  ) => {
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      toast.warning("فرمت عکس‌ها باید jpg، jpeg یا png باشد.");
      return;
    }

    if (file.size > MAX_IMAGE_SIZE) {
      toast.error("حجم عکس نباید بیشتر از ۲ مگابایت باشد.");
      return;
    }

    const previewUrl = URL.createObjectURL(file);

    const newImages = [...uploadedImages];

    if (newImages[index].preview) {
      URL.revokeObjectURL(newImages[index].preview);
    }

    newImages[index] = { file, preview: previewUrl };
    setUploadedImages(newImages);

    if (input) input.value = "";
  };

  const handleRemoveImage = (index: number) => {
    const newImages = [...uploadedImages];

    if (newImages[index].preview) {
      URL.revokeObjectURL(newImages[index].preview);
    }

    newImages[index] = { file: null, preview: null };
    setUploadedImages(newImages);
  };

  useEffect(() => {
    return () => {
      uploadedImages.forEach((img) => {
        if (img.preview) URL.revokeObjectURL(img.preview);
      });
    };
  }, [uploadedImages]);

  return (
    <div className="grow flex flex-wrap gap-6">
      {uploadedImages.map((image, index) => (
        <div
          key={index}
          className={cn(
            "relative min-w-20 sm:min-w-44 max-h-60 aspect-square flex-1 flex justify-center items-center rounded-xl overflow-hidden border-2",
            image.file ? "border-primary" : "border-dashed"
          )}
        >
          <Label
            htmlFor={`image-${index}`}
            className="w-full h-full flex justify-center items-center cursor-pointer"
          >
            <Input
              onChange={(e) => {
                handleImageChange(index, e.target.files?.[0], e.target);
              }}
              accept="image/png, image/jpeg, image/jpg"
              id={`image-${index}`}
              type="file"
              hidden
            />

            {image.preview ? (
              <div className="w-full h-full relative">
                <Image
                  className="object-center object-cover"
                  alt={`preview-${index}`}
                  src={image.preview!}
                  sizes="300px"
                  fill
                />
              </div>
            ) : (
              <ImagePlus className="text-muted-foreground size-10 md:size-12" />
            )}
          </Label>

          {image.file && (
            <Button
              onClick={() => handleRemoveImage(index)}
              className="absolute top-0.5 right-0.5 sm:top-2 sm:right-2 border shadow-sm"
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
