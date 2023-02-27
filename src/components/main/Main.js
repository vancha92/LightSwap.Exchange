// packages
import React from "react";

// pages and components

// styles
import "./Main.css";

const Main = () => {
  return (
    <div className="mainContainer">
      Mains
      <div
        className="test"
        style={{
          background: "var(--twoColoredMustard)",
          border: "var(--cardBorderMustard)",
        }}
      >
        Hallo
      </div>
      <div
        className="test"
        style={{
          background: "var(--twoColoredBlue)",
          border: "var(--cardBorderBlue)",
        }}
      >
        hallo
      </div>
      <div
        className="test"
        style={{
          background: "var(--twoColoredBlue)",
          border: "var(--cardBorderBlue)",
        }}
      >
        hallo
      </div>
      <div
        className="test"
        style={{
          background: "var(--twoColoredBlue)",
          border: "var(--cardBorderBlue)",
        }}
      >
        hallo
      </div>
    </div>
  );
};

export default Main;
