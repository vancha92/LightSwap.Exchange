// packages
import React from "react";

// pages and components
import headLogo from "../../assets/headLogo.png";

// styles
import "./NavWeb3.css";

const NavWeb3 = () => {
  return (
    <div className="navWeb3Container">
      <div className="navWeb3">
        <img src={headLogo} alt="" className="brandLogoWeb3" />
        <div style={{ display: "flex" }}>
          <div>web3</div>
          <div>web3</div>
          <div>web3</div>
        </div>
      </div>
    </div>
  );
};

export default NavWeb3;
