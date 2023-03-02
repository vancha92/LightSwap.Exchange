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
      <div className="homeSegmentLane">
        <div className="homeSegmentContainer">
          {/* First Segment */}
          <div className="firstHomeSegment">
            <div className="firstHomeSegmentContent">
              {/* Top */}
              <div className="firstHomeSegmentContentTop">
                Let there be Light ...{" "}
                <span style={{ color: "var(--lightMustardColor)" }}>Swap!</span>
              </div>

              {/* Middle */}
              <div className="firstHomeSegmentContentMiddle">
                Trade, earn, and win crypto on the most popular decentralized
                platform in the galaxy.
              </div>

              {/* Bottom */}
              <div className="firstHomeSegmentContentBottom">Action</div>
            </div>

            {/* Image */}
            <MovingBundle1 img1={vaxIcon} img2={vaxIcon} img3={vaxIcon} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
