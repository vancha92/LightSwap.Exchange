// packages
import React, { useEffect } from "react";

// pages and components

// styles
// import "./LightPad.css";

const LightPad = () => {
  // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return <div>LightPad</div>;
};

export default LightPad;
