"use client";

import "swiper/css";
import React from "react";
import Image from "next/image";
import useSliderController from "@singleProperty/hooks/useSliderController";
import { CameraOff, ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Button } from "@/components/ui/button";

interface SliderProps {
  slidesImage?: string[];
}

const Slider = ({ slidesImage }: SliderProps) => {
  const imagesCount = slidesImage?.length || 0;

  const {
    sliderRef,
    handleSlideChange,
    isAtFirstSlide,
    canSlide,
    slideNext,
    isAtLastSlide,
    slidePrevious,
    handleInit,
    handleResize,
  } = useSliderController(imagesCount);

  return (
    <div className="rounded-xl overflow-hidden">
      <Swiper
        onSlideChange={handleSlideChange}
        onResize={handleResize}
        className="relative"
        onInit={handleInit}
        spaceBetween={24}
        slidesPerView={1}
        ref={sliderRef}
        grabCursor
        dir="ltr"
        breakpoints={{
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
      >
        {slidesImage?.length
          ? slidesImage?.map((image, index) => (
              <SwiperSlide
                className="relative w-full aspect-square border shadow-sm rounded-xl overflow-hidden"
                key={`${image}-${index}`}
              >
                <Image
                  className="object-cover object-center"
                  alt="property image"
                  sizes="600px"
                  src={image}
                  priority
                  fill
                />
              </SwiperSlide>
            ))
          : [...Array(3)].fill(0).map((_, index) => (
              <SwiperSlide
                className="w-full aspect-square border shadow-sm rounded-xl overflow-hidden"
                key={`image-${index}`}
              >
                <div className="flex justify-center items-center size-full bg-muted text-muted-foreground">
                  <CameraOff className="size-2/3" />
                </div>
              </SwiperSlide>
            ))}

        {canSlide && (
          <>
            <Button
              className="absolute top-0 bottom-0 my-auto left-4 z-10"
              disabled={isAtFirstSlide}
              onClick={slidePrevious}
              variant="ternary"
              size="icon-lg"
            >
              <ChevronLeft className="size-fit" />
            </Button>

            <Button
              className="absolute top-0 bottom-0 my-auto right-4 z-10"
              disabled={isAtLastSlide}
              onClick={slideNext}
              variant="ternary"
              size="icon-lg"
            >
              <ChevronRight className="size-fit" />
            </Button>
          </>
        )}
      </Swiper>
    </div>
  );
};

export default Slider;
