// packages
import React, { useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";

// pages and components
import doubleArrowIcon from "../../assets/doubleArrowIcon.png";

// styles
import "./Swap.css";

const Swap = () => {
  // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  const currentRoute = useLocation();
  console.log(currentRoute);

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
        <div className="swapModuleMiddle">
          <div className="fromCCYcontainer">
            <div className="fromCCYTop">
              <div className="fromCCY">From</div>
              <div className="fromCCYBalance">Balance: {"3508.2"}</div>
            </div>
            <div className="fromCCYBottom">
              <div className="fromCCYCoin">MTV</div>
              <div className="fromCCYMax"></div>
              <div className="fromCCYAmount">2300.0</div>
            </div>
          </div>
          <div className="switchDirectionContainer">
            <img src={doubleArrowIcon} alt="switch" />
          </div>
          <div className="toCCYContainer">
            <div className="toCCYTop">
              <div className="toCCY">To</div>
              <div className="toCCYBalance">Balance: {"0"}</div>
            </div>
            <div className="toCCYBottom">
              <div className="toCYCoin">PROX</div>
              <div className="toCCYMax"></div>
              <div className="toCCYAmount">4100.0</div>
            </div>
          </div>
        </div>

        {/***************************/}
        <div className="swapModuleBottom">
          <div className="buttonContainer highlightBG">
            <button className="buttonTextOnly">Connect Wallet</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Swap;
