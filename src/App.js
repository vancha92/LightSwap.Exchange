// packages
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// pages and components
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";

// styles
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <div>Main Text</div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
