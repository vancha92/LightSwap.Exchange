// packages
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// pages and components
import Footer from "./components/footer/Footer";
// import LeftSide from "./components/leftSide/LeftSide";
import Main from "./components/main/Main";
import NavMenu from "./components/navMenu/NavMenu";
// import RightSide from "./components/rightSide/RightSide";
import ScrollTopButton from "./components/scrollTopButton/ScrollTopButton";
import Top from "./components/top/Top";
import NavWeb3 from "./components/web3/NavWeb3";
import Home from "./pages/home/Home";
import Swap from "./pages/swap/Swap";

// styles
import "./App.css";
import "./components/background/Ocean.css";
import "./functions/UtilityClasses.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Top>
          <NavMenu />
          <NavWeb3 />
        </Top>

        <Main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/swap" element={<Swap />} />
          </Routes>
        </Main>

        <Footer />
      </Router>
      <ScrollTopButton />
    </div>
  );
}

export default App;
