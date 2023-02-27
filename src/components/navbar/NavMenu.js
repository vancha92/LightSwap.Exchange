// packages
import React from "react";

// pages and components
import headLogo from "../../assets/headLogo.png";
import { menuItemData } from "../../data/menuItemData";
import MenuItem from "./MenuItem";

// styles
import "./NavMenu.css";

const NavMenu = () => {
  let depthLevel = 0;

  return (
    <div className="navMenuContainer">
      <img src={headLogo} alt="" className="brandLogoNav" />
      <div className="brandTitleNav">LightSwap</div>
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
