// packages
import React, { useState } from "react";

// pages and components
import topArrowIcon from "../../assets/topArrowIcon.png";

// styles
import "./ScrollTopButton.css";

const ScrollTopButton = () => {
  const [scrollTop, setScrollTop] = useState("scrollTopButton");

  // When the user scrolls down 20px from the top of the document, show the button
  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (
      document.body.scrollTop > 64 ||
      document.documentElement.scrollTop > 64
    ) {
      setScrollTop("scrollTopButton");
    } else {
      setScrollTop("scrollTopButton hideButton");
    }
  }

  // When the user clicks on the button, scroll to the top of the document
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <button onClick={scrollToTop} className={scrollTop} title="Go to top">
      <img className="topArrowIcon" src={topArrowIcon} alt="go Top" />
    </button>
  );
};

export default ScrollTopButton;
