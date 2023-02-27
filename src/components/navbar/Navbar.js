// packages
import React from "react";

// pages and components
import { menuItemData } from "../../data/menuItemData";
import MenuItem from "./MenuItem";

// styles
import "./Navbar.css";

const Navbar = () => {
  let depthLevel = 0;

  return (
    <div className="navbarContainer">
      <div className="navbar">
        <ul className="navMenu">
          {menuItemData.map((menuItem, index) => {
            return (
              <MenuItem
                menuItem={menuItem}
                depthLevel={depthLevel}
                key={index}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
