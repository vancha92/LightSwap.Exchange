// packages
import React from "react";

// pages and components
import AboutSection from "./AboutSection";
import ImpressumSection from "./ImpressumSection";
import SocialSection from "./SocialSection";

// styles
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footerContainer">
      <div className="footer">
        <AboutSection />
        <SocialSection />
        <ImpressumSection />
      </div>
    </div>
  );
};

export default Footer;
