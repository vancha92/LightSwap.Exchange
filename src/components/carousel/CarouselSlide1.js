// packages
import React from "react";
import { SwiperSlide } from "swiper/react";
import headLogo from "../../assets/headLogo.png";
import proxIcon from "../../assets/proxIcon.png";

// pages and components

// styles

export const createSlide1 = (content) => {
  const carouselItemContainerStyle = {};
  const carouselItemSpecialBGStyle = {};

  return (
    <SwiperSlide>
      <div className="carouselItemContainer" style={carouselItemContainerStyle}>
        <div className="carouselItemHeader">
          <img
            src={headLogo}
            alt="headIcon"
            className="carouselItemHeaderLogo"
          />
          <p className="carouselItemHeaderText">Proxima The Game</p>
        </div>
        <div className="carouselItemBody">$PROX Farms are live!</div>
        <div className="carouselItemFooter">
          <div className="buttonContainer highlightBG">
            <button className="buttonTextOnly">Get $PROX</button>
          </div>
        </div>
        <div
          className="carouselItemSpecialBG"
          style={carouselItemSpecialBGStyle}
        >
          <img src={proxIcon} alt="proxcoin" />
        </div>
      </div>
    </SwiperSlide>
  );
};
