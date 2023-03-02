import React from "react";
import { useWindowSize } from "../../hooks/useWindowSize";
import "./Top.css";

const Top = ({ children }) => {
  const windowWidth = useWindowSize().width;

  return (
    <div className="topContainer">
      {windowWidth > 991 ? (
        <div className="desktopNavigationPane">{children}</div>
      ) : (
        children
      )}
    </div>
  );
};

export default Top;
