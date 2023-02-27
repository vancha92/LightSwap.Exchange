// packages
import React from "react";

// pages and components
import { menuItemData } from "../../data/menuItemData";
import MenuItem from "./MenuItem";

// styles
import "./NavMenu.css";

const NavMenu = () => {
  let depthLevel = 0;

  return (
    <div className="navMenuContainer">
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
