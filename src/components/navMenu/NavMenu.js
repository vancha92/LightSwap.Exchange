// packages
import React from "react";
import { useNavigate } from "react-router-dom";

// pages and components
import headLogo from "../../assets/headLogo.png";
import { menuItemData } from "../../data/menuItemData";
import MenuItem from "./MenuItem";

// styles
import "./NavMenu.css";

const NavMenu = () => {
  let depthLevel = 0;
  const navigate = useNavigate();

  return (
    <div className="navMenuContainer">
      <div className="homeLink" onClick={() => navigate("/")}>
        <img src={headLogo} alt="" className="brandLogoNav" />
        <div className="brandTitleNav">LightSwap</div>
      </div>
      <ul className="navMenu">
        {menuItemData.map((menuItem, index) => {
          return (
            <MenuItem menuItem={menuItem} depthLevel={depthLevel} key={index} />
          );
        })}
      </ul>
    </div>
  );
};

export default NavMenu;
