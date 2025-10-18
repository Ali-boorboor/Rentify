import { useCallback, useRef, useState } from "react";
import { SwiperRef } from "swiper/react";
import { Swiper } from "swiper/types";

const useSliderController = () => {
  const sliderRef = useRef<SwiperRef>(null);

  const [isAtFirstSlide, setIsAtFirstSlide] = useState(true);
  const [isAtLastSlide, setIsAtLastSlide] = useState(false);

  const slideNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);

  const slidePrevious = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleSlideChange: (swiper: Swiper) => void = useCallback((swiper) => {
    setIsAtFirstSlide(swiper.isBeginning);
    setIsAtLastSlide(swiper.isEnd);
  }, []);

  return {
    sliderRef,
    isAtFirstSlide,
    setIsAtFirstSlide,
    isAtLastSlide,
    setIsAtLastSlide,
    slideNext,
    slidePrevious,
    handleSlideChange,
  };
};

export default useSliderController;
