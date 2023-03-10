// packages
import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";

// pages and components
import Dropdown from "./Dropdown";

// styles
import "./MenuItem.css";

const MenuItems = ({ menuItem, depthLevel }) => {
  const [dropdownToggled, setDropdownToggled] = useState(false);
  const ref = useRef();

  // Dropdown toggle
  const toggleDropdown = () => {
    setDropdownToggled((prev) => !prev);
  };

  //   Close when outside click https://blog.logrocket.com/detect-click-outside-react-component-how-to/
  useEffect(() => {
    const handler = (event) => {
      if (
        dropdownToggled &&
        ref.current &&
        !ref.current.contains(event.target)
      ) {
        setDropdownToggled(false);
      }
    };
    document.addEventListener("mousedown", handler);
    document.addEventListener("touchstart", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
      document.removeEventListener("touchstart", handler);
    };
  }, [dropdownToggled]);

  // Hover for non-mobile
  const onMouseEnter = () => {
    window.innerWidth > 960 && setDropdownToggled(true);
  };
  const onMouseLeave = () => {
    window.innerWidth > 960 && setDropdownToggled(false);
  };

  // Path for menus w/ submenus
  if (menuItem.subMenu) {
    return (
      <li
        className={depthLevel < 1 ? "menuItem" : "menuItem subMenu"}
        ref={ref}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        {depthLevel < 1 ? (
          <div className="iconButton" onClick={toggleDropdown}>
            <img src={menuItem.icon} alt="test" className="iconButtonIMGText" />
            <p className="iconButtonTitle menuItemTitle">{menuItem.title}</p>
          </div>
        ) : (
          <p className="subMenuItemTitle" onClick={toggleDropdown}>
            {menuItem.title}
          </p>
        )}

        <Dropdown
          subMenu={menuItem.subMenu}
          dropdownToggled={dropdownToggled}
          depthLevel={depthLevel}
        />
      </li>
    );
  }

  // Path for menus w/o submenus
  if (!menuItem.subMenu) {
    return (
      <NavLink to={menuItem.link}>
        <li className={depthLevel < 1 ? "menuItem" : "menuItem subMenu"}>
          {depthLevel < 1 ? (
            <div className="iconButton" onClick={toggleDropdown}>
              <img
                src={menuItem.icon}
                alt="test"
                className="iconButtonIMGText"
              />
              <p className="iconButtonTitle menuItemTitle">{menuItem.title}</p>
            </div>
          ) : (
            <p className="subMenuItemTitle" onClick={toggleDropdown}>
              {menuItem.title}
            </p>
          )}
        </li>
      </NavLink>
    );
  }
};

export default MenuItems;
