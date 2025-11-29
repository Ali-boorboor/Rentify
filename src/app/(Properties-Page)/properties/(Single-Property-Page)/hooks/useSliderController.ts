import { useCallback, useRef, useState } from "react";
import { SwiperRef } from "swiper/react";
import { Swiper } from "swiper/types";

const useSliderController = (slidesCount: number) => {
  const sliderRef = useRef<SwiperRef>(null);

  const [isAtFirstSlide, setIsAtFirstSlide] = useState(true);
  const [isAtLastSlide, setIsAtLastSlide] = useState(false);
  const [canSlide, setCanSlide] = useState(false);

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

  const updateCanSlide = useCallback(
    (swiper: Swiper) => {
      const perView =
        typeof swiper.params.slidesPerView === "number"
          ? swiper.params.slidesPerView
          : 1;

      setCanSlide(slidesCount > perView);
    },
    [slidesCount]
  );

  const handleInit = useCallback(
    (swiper: Swiper) => {
      updateCanSlide(swiper);
    },
    [updateCanSlide]
  );

  const handleResize = useCallback(
    (swiper: Swiper) => {
      updateCanSlide(swiper);
    },
    [updateCanSlide]
  );

  return {
    sliderRef,
    isAtFirstSlide,
    setIsAtFirstSlide,
    isAtLastSlide,
    setIsAtLastSlide,
    canSlide,
    slideNext,
    slidePrevious,
    handleSlideChange,
    handleInit,
    handleResize,
  };
};

export default useSliderController;
