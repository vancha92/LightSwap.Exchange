// packages
import React, { useEffect } from "react";

// pages and components

// styles
// import "./Pools.css";

const Pools = () => {
  // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return <div>Pools</div>;
};

export default Pools;
