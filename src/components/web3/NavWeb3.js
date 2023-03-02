// packages
// eslint-disable-next-line
import React from "react";
import { useNavigate } from "react-router-dom";
import { useWindowSize } from "../../hooks/useWindowSize";

// pages and components
import headLogo from "../../assets/headLogo.png";

// styles
import "./NavWeb3.css";

const NavWeb3 = () => {
  const size = useWindowSize();
  const navigate = useNavigate();

  return (
    <div className="navWeb3Container">
      <div className="navWeb3">
        <img
          src={headLogo}
          alt=""
          className="brandLogoWeb3"
          onClick={() => navigate("/")}
        />

        <div className="buttonContainer highlightBG">
          <button className="buttonTextOnly">
            {size.width > 991 ? "Connect Wallet" : "Connect"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavWeb3;
