// packages
import React, { useEffect } from "react";

// pages and components

// styles
// import "./Farms.css";

const Farms = () => {
  // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return <div>Farms</div>;
};

export default Farms;
