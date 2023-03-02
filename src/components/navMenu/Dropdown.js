// packages
import React from "react";

// pages and components
import MenuItem from "./MenuItem";

// styles
import "./Dropdown.css";

const Dropdown = ({ subMenu, dropdownToggled, depthLevel }) => {
  depthLevel = depthLevel + 1;
  const dropdownClass = depthLevel > 1 ? "dropdownSubmenu" : "dropdown";

  if (dropdownToggled) {
    return (
      <ul className={dropdownClass}>
        {subMenu.map((menuItem, index) => {
          return (
            <MenuItem menuItem={menuItem} depthLevel={depthLevel} key={index} />
          );
        })}
      </ul>
    );
  }
};

export default Dropdown;
