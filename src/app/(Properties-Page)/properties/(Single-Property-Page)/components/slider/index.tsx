"use client";

import "swiper/css";
import React from "react";
import Image from "next/image";
import useSliderController from "@singleProperty/hooks/useSliderController";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Button } from "@/components/ui/button";

const slides = [
  { id: 1, image: "/test/pic1.png" },
  { id: 2, image: "/test/pic2.png" },
  { id: 3, image: "/test/pic3.png" },
  { id: 4, image: "/test/pic3.png" },
];

interface SliderProps {
  slidesImage?: string[];
}

const Slider = ({ slidesImage }: SliderProps) => {
  const {
    sliderRef,
    handleSlideChange,
    isAtFirstSlide,
    slideNext,
    isAtLastSlide,
    slidePrevious,
  } = useSliderController();

  return (
    <div className="rounded-xl overflow-hidden">
      <Swiper
        onSlideChange={handleSlideChange}
        className="relative"
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
        {slides.map((slide) => (
          <SwiperSlide className="w-full aspect-square" key={slide.id}>
            <Image
              className="object-cover object-center"
              alt="property image"
              src={slide.image}
              sizes="496px"
              priority
              fill
            />
          </SwiperSlide>
        ))}

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
      </Swiper>
    </div>
  );
};

export default Slider;
