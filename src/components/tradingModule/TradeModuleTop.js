// packages
import { NavLink, useLocation, useParams } from "react-router-dom";

// pages and components

// styles
import "./TradeModuleTop.css";

const TradeModuleTop = () => {
  const { tradeModule } = useParams();

  // Segment for Swap and Liquidity page
  if (tradeModule === "swap" || tradeModule === "pool") {
    return (
      <div className="tradeModuleTop">
        <div className="tradeSwitchContainer">
          <NavLink to={"/trade/swap"} className="swapLinkContainer">
            Swap
          </NavLink>
          <NavLink to={"/trade/pool"} className="poolLinkContainer">
            Pool
          </NavLink>
        </div>
      </div>
    );
  }

  return <div>No route</div>;
};

export default TradeModuleTop;
