// packages
import React, { useEffect } from "react";

// pages and components
// import SwapModuleBottom from "../../components/tradingModule/SwapModuleBottom";
// import SwapModuleMiddle from "../../components/tradingModule/SwapModuleMiddle";
// import SwapModuleTop from "../../components/tradingModule/SwapModuleTop";
import TradingModule from "../../components/tradingModule/TradingModule";

// styles
import "./Trade.css";

const Swap = () => {
  // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="trade">
      <TradingModule />
    </div>
  );
};

export default Swap;
