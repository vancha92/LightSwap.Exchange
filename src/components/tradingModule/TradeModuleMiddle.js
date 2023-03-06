// packages
import React, { useState } from "react";
import { useParams } from "react-router-dom";

// pages and components
import doubleArrowIcon from "../../assets/doubleArrowIcon.png";
import { handleChangeAmountInput } from "../../functions/Utility";

// styles
import "./TradeModuleMiddle.css";

const TradeModuleMiddle = () => {
  const [fromCCYAmount, setFromCCYAmount] = useState("");
  const [toCCYAmount, setToCCYAmount] = useState("");

  const { tradeModule } = useParams();

  // Segment for Swap page
  if (tradeModule === "swap") {
    return (
      <div className="tradeModuleMiddle">
        {/************************************************************************************/}
        {/*                                From Currency                                     */}
        {/************************************************************************************/}
        <div className="fromCCYcontainer">
          {/* Top section: From / Balance */}
          <div className="fromCCYTop">
            <div className="fromCCY">From</div>
            <div className="fromCCYBalance">Balance: {"3508.2"}</div>
          </div>

          {/* Bottom section: From CCY / MAX / From CCY Amount*/}
          <div className="fromCCYBottom">
            <form className="fromCCYCoin">
              <select name="fromCCYSelect" id="fromCCYSelect">
                <option value="MTV">MTV</option>
                <option value="PROX">PROX</option>
                <option value="USDC">USDC</option>
              </select>
            </form>
            <div className="fromCCYMax"></div>
            <input
              className="fromCCYAmount"
              inputMode="decimal"
              title="From amount"
              type="text"
              placeholder="0.0"
              minLength="1"
              maxLength="79"
              value={fromCCYAmount}
              onChange={(e) => handleChangeAmountInput(e, setFromCCYAmount)}
            />
          </div>
        </div>

        {/************************************************************************************/}
        {/*                                Switching Arrows                                  */}
        {/************************************************************************************/}
        <div className="switchDirectionContainer">
          <img src={doubleArrowIcon} alt="switch" />
        </div>

        {/************************************************************************************/}
        {/*                                To currency                                       */}
        {/************************************************************************************/}
        <div className="toCCYContainer">
          {/* Top section: From / Balance */}
          <div className="toCCYTop">
            <div className="toCCY">To</div>
            <div className="toCCYBalance">Balance: {"0"}</div>
          </div>

          {/* Bottom section: To CCY / MAX / To CCY Amount*/}
          <div className="toCCYBottom">
            <form className="toCCYCoin">
              <select name="toCCYSelect" id="toCCYSelect">
                <option value="MTV">MTV</option>
                <option value="PROX">PROX</option>
                <option value="USDC">USDC</option>
              </select>
            </form>
            <div className="toCCYMax"></div>
            <input
              className="toCCYAmount"
              inputMode="decimal"
              title="From amount"
              type="text"
              placeholder="0.0"
              minLength="1"
              maxLength="79"
              value={toCCYAmount}
              onChange={(e) => handleChangeAmountInput(e, setToCCYAmount)}
            />
          </div>
        </div>
      </div>
    );
  }

  // Segment for Pool page
  if (tradeModule === "pool") {
    return (
      <div className="tradeModuleMiddle pool">
        <div className="buttonContainer highlightBG pool">
          <button className="buttonTextOnly">Add liquidity</button>
        </div>
      </div>
    );
  }

  return <div>No route</div>;
};

export default TradeModuleMiddle;
