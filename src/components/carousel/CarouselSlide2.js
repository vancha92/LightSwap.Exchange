// packages
import React from "react";
import { SwiperSlide } from "swiper/react";

// pages and components
import wormIcon from "../../assets/wormIcon.png";

// styles

export const createSlide2 = (content) => {
  const carouselItemContainerStyle = { background: "rgba(160, 226, 95)" };
  const carouselItemSpecialBGStyle = { transform: "translate(0%, 10%)" };

  return (
    <SwiperSlide>
      <div className="carouselItemContainer" style={carouselItemContainerStyle}>
        <div className="carouselItemHeader">
          {/* <img
            src={headLogo}
            alt="headIcon"
            className="carouselItemHeaderLogo"
          /> */}
          <p className="carouselItemHeaderText">MultiWorms X Guru</p>
        </div>
        <div className="carouselItemBody">Get $DIRT-y!</div>
        <div className="carouselItemFooter">
          <div className="buttonContainer highlightDarkBG">
            <button className="buttonTextOnly">Check it out</button>
          </div>
        </div>
        <div
          className="carouselItemSpecialBG"
          style={carouselItemSpecialBGStyle}
        >
          <img src={wormIcon} alt="worm" />
        </div>
      </div>
    </SwiperSlide>
  );
};
