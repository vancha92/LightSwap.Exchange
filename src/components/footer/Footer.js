// packages
import React from "react";

// pages and components
import { useWindowSize } from "../../hooks/useWindowSize";
import AboutSection from "./AboutSection";
import ImpressumSection from "./ImpressumSection";
import SocialSection from "./SocialSection";

// styles
import "./Footer.css";

const Footer = () => {
  const windowWidth = useWindowSize().width;

  return (
    <>
      <div className="footerContainer">
        <div className="footer">
          <AboutSection />
          <SocialSection />
          <ImpressumSection />
        </div>
      </div>
      {windowWidth < 992 ? <div className="mobileNavMenu"></div> : ""}
    </>
  );
};

export default Footer;
