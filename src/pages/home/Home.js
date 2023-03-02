// packages
import React from "react";
import Carousel from "../../components/carousel/Carousel";

// pages and components
import vaxIcon from "../../assets/vaxIcon.svg";
import MovingBundle1 from "../../functions/MovingBundle1";

// styles
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <Carousel />

      <div className="homeSegmentContainer">
        {/* First Segment */}
        {/* First Segment */}
        {/* First Segment */}
        <div className="segment1 homeSegment">
          {/* Content */}
          {/***********/}
          <div className="segment1 homeSegmentContent">
            {/* Top */}
            <div className="segment1 homeSegmentContentTop">
              Let there be Light ...{" "}
              <span style={{ color: "var(--lightMustardColor)" }}>Swap!</span>
            </div>
            {/* Middle */}
            <div className="segment1 homeSegmentContentMiddle">
              Trade, earn, and win crypto on the most popular decentralized
              platform in the galaxy.
            </div>
            {/* Bottom */}
            <div className="segment1 homeSegmentContentBottom">Action</div>
          </div>
          {/* Image */}
          {/*********/}
          <div className="segment1 homeSegmentImage">
            {/* Image */}
            <MovingBundle1
              img1={vaxIcon}
              img2={vaxIcon}
              img3={vaxIcon}
              movingBundleCSS={{ width: "200px" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
