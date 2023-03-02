// packages
import React from "react";

// pages and components

// styles
import "./AboutSection.css";

const AboutSection = () => {
  return (
    <div className="aboutContainer">
      <div className="aboutPart">
        <div className="aboutTitle">About</div>
        <div className="aboutItem">Contact</div>
        <div className="aboutItem">Brand</div>
        <div className="aboutItem">Blog</div>
        <div className="aboutItem">Litepaper</div>
      </div>

      <div className="aboutPart">
        <div className="aboutTitle">Help</div>
        <div className="aboutItem">Troubleshooting</div>
        <div className="aboutItem">Guides</div>
      </div>

      <div className="aboutPart">
        <div className="aboutTitle">Developers</div>
        <div className="aboutItem">Github</div>
        <div className="aboutItem">Documentation</div>
        <div className="aboutItem">Audits</div>
      </div>
    </div>
  );
};

export default AboutSection;
