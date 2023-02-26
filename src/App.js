// packages
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// pages and components
import Footer from "./components/footer/Footer";
import LeftSide from "./components/leftSide/LeftSide";
import Main from "./components/main/Main";
import Navbar from "./components/navbar/Navbar";
import RightSide from "./components/rightSide/RightSide";

// styles
import "./App.css";
import "./components/background/Ocean.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <LeftSide />
        <Main />
        <RightSide />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
