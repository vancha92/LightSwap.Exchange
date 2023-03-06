// packages
import React from "react";

// pages and components
import TradeModuleBottom from "./TradeModuleBottom";
import TradeModuleMiddle from "./TradeModuleMiddle";
import TradeModuleTop from "./TradeModuleTop";

// styles
import "./TradingModule.css";

const TradingModule = () => {
  return (
    <div className="tradingModule">
      <TradeModuleTop />
      <TradeModuleMiddle />
      <TradeModuleBottom />
    </div>
  );
};

export default TradingModule;
