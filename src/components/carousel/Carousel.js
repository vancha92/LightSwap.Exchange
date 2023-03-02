// packages
import React from "react";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper";
import { Swiper } from "swiper/react";

// pages and components
import { useWindowSize } from "../../hooks/useWindowSize";
import { createSlide1 } from "./CarouselSlide1";
import { createSlide2 } from "./CarouselSlide2";

// styles
import "swiper/css/bundle";
import "swiper/css/effect-fade";
import "./Carousel.css";

const Carousel = () => {
  const windowWidth = useWindowSize().width;

  let carouselMargin =
    windowWidth > 1050
      ? {
          marginLeft: (windowWidth - 992) / 2,
          marginRight: (windowWidth - 992) / 2,
        }
      : {
          marginLeft: "1em",
          marginRight: "1em",
        };

  return (
    <div className="carouselContainer" style={carouselMargin}>
      <Swiper
        modules={[Pagination, Navigation, Autoplay, EffectFade]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        effect="fade"
        autoplay={{ delay: 4000 }}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
        {createSlide1()}
        {createSlide2()}
      </Swiper>
    </div>
  );
};

export default Carousel;
