// packages
import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";

// pages and components

// styles
// import "./Liquidity.css";

const Liquidity = () => {
  // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="tradeContainer">
      <div className="swapModule">
        {/***************************/}
        <div className="swapModuleTop">
          <div className="tradeSwitchContainer">
            <NavLink to={"/swap"} className="swapContainer">
              Swap
            </NavLink>
            <NavLink to={"/liquidity"} className="liquidityContainer">
              Liquidity
            </NavLink>
          </div>
        </div>

        {/***************************/}
        <div className="swapModuleMiddle">Liquidity</div>

        {/***************************/}
        <div className="swapModuleBottom">
          <div className="buttonContainer highlightBG">
            <button className="buttonTextOnly">Add liquidity</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Liquidity;
