// packages
import { NavLink, useParams } from "react-router-dom";

// pages and components
import helpIcon from "../../assets/helpIcon.png";

// styles
import "./TradeModuleBottom.css";

const TradeModuleBottom = () => {
  const { tradeModule } = useParams();

  // Segment for Swap page
  if (tradeModule === "swap") {
    return (
      <div className="tradeModuleBottom">
        <div className="buttonContainer highlightBG">
          <button className="buttonTextOnly">Connect Wallet</button>
        </div>
      </div>
    );
  }

  // Segment for Pool page
  if (tradeModule === "pool") {
    return (
      <div className="tradeModuleBottom">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div>Your liquidity</div>
          <img
            src={helpIcon}
            alt="helpIcon"
            style={{
              filter: "invert()",
              height: "1.5em",
              width: "1.5em",
              cursor: "pointer",
            }}
          />
        </div>
        <div
          style={{
            border: "var(--borderDarkMustard)",
            fontSize: "0.75em",
            borderRadius: "var(--borderRadius)",
            padding: "5em 2em 5em 2em",
            marginTop: "1em",
          }}
        >
          Connect to a wallet to view your liquidity
        </div>
        <div
          style={{
            fontSize: "0.75em",
            marginTop: "1em",
          }}
        >
          Don't see a pool you joined?
          <br />
          <NavLink
            to="/trade/find"
            style={{ color: "var(--darkMustardColor)" }}
          >
            Import it
          </NavLink>
        </div>
      </div>
    );
  }

  return <div>No route</div>;
};

export default TradeModuleBottom;
