// packages
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// pages and components
import Footer from "./components/footer/Footer";
import LeftSide from "./components/leftSide/LeftSide";
import Main from "./components/main/Main";
import NavMenu from "./components/navbar/NavMenu";
import RightSide from "./components/rightSide/RightSide";
import NavWeb3 from "./components/web3/NavWeb3";

// styles
import "./App.css";
import "./components/background/Ocean.css";
import "./functions/UtilityClasses.css";

function App() {
  return (
    <div className="App">
      <Router>
        <NavMenu />
        <NavWeb3 />
        <LeftSide />
        <Main />
        <RightSide />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
