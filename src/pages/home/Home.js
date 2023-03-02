// packages
import React from "react";
import Carousel from "../../components/carousel/Carousel";

// pages and components
import blockchainIcon from "../../assets/blockchainIcon.png";
import vaxIcon from "../../assets/vaxIcon.svg";
import MovingBundle1 from "../../functions/MovingBundle1";
import { useWindowSize } from "../../hooks/useWindowSize";

// styles
import "./Home.css";

const Home = () => {
  let windowWidth = useWindowSize().width;
  let size = windowWidth > 991 ? windowWidth / 4 : windowWidth / 2;

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
            <div className="segment1 homeSegmentContentBottom">
              <div className="buttonContainer highlightBG">
                <button className="buttonTextOnly">
                  {windowWidth > 991 ? "Connect Wallet" : "Connect"}
                </button>
              </div>
              <div
                className="buttonContainer highlightBG"
                style={{
                  background: "unset",
                  border: "var(--borderDarkMustard)",
                }}
              >
                <button className="buttonTextOnly">Trade now</button>
              </div>
            </div>
          </div>

          {/* Image */}
          {/*********/}
          <div className="segment1 homeSegmentImage">
            {/* Image */}
            <MovingBundle1
              img1={vaxIcon}
              img1CSS={{ width: size }}
              bundle1CSS={{ top: "0", left: "0" }}
              img2={vaxIcon}
              img2CSS={{ width: size }}
              bundle2CSS={{ top: "0", left: "0" }}
              img3={vaxIcon}
              img3CSS={{ width: size }}
              bundle3CSS={{ top: "0", left: "0" }}
              movingBundleCSS={{ width: size }}
            />
          </div>
        </div>

        {/* Second Segment */}
        {/* Second Segment */}
        {/* Second Segment */}
        <div className="segment2Background">
          <div className="segment2 homeSegment">
            {/* Content */}
            {/***********/}
            <div className="segment2 homeSegmentContent">
              {/* Top */}
              <div className="segment2 homeSegmentContentTop">
                Pioneer within the ecosystem
              </div>
              {/* Middle */}
              <div className="segment2 homeSegmentContentMiddle">
                LightSwap has the most users of any decentralized platforms
                within the MultiVAC ecosystem. <br />
                The users trust is visible by the TVL locked via our
                smartcontracts.
              </div>
              {/* Bottom */}
              <div className="segment2 homeSegmentContentBottom"></div>
            </div>

            {/* Image */}

            {/*********/}
            {/* <div className="segment2 homeSegmentImage"></div> */}
          </div>
        </div>

        {/* Third Segment */}
        {/* Third Segment */}
        {/* Third Segment */}
        <div className="segment3 homeSegment">
          {/* Image */}
          {/*********/}
          <div className="segment3 homeSegmentImage">
            <img src={blockchainIcon} alt="blockchain" id="blockchainIcon" />
          </div>

          {/* Content */}
          {/***********/}
          <div className="segment3 homeSegmentContent">
            {/* Top */}
            <div className="segment3 homeSegmentContentTop">
              Trade anything. No registration, no hassle.
            </div>
            {/* Middle */}
            <div className="segment3 homeSegmentContentMiddle">
              Trade any token on MultiVAC Mainnet in seconds and for low fee's
              by simply connecting your wallet.
            </div>
            {/* Bottom */}
            <div className="segment3 homeSegmentContentBottom">
              {" "}
              <div className="buttonContainer highlightBG">
                <button className="buttonTextOnly">
                  {windowWidth > 991 ? "Connect Wallet" : "Connect"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
