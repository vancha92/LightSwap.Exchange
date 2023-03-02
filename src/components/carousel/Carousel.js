// packages
import React from "react";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper";
import { Swiper } from "swiper/react";

// pages and components
import { createSlide1 } from "./CarouselSlide1";
import { createSlide2 } from "./CarouselSlide2";
import { createSlide3 } from "./CarouselSlide3";

// styles
import "swiper/css/bundle";
import "swiper/css/effect-fade";
import "./Carousel.css";

const Carousel = () => {
  return (
    <div className="carouselContainer">
      <Swiper
        modules={[Pagination, Navigation, Autoplay, EffectFade]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        effect="fade"
        autoplay={{ delay: 4000 }}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
        {createSlide1("Content 1 goes here")}
        {createSlide2("Next thing will be there")}
        {/* {createSlide3("Nudes go elsewhere")} */}
      </Swiper>
    </div>
  );
};

export default Carousel;
