import * as React from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";

import Header from "./components/Header";
import Home from "./pages/Home";
import Services from "./components/Services";
import Features from "./components/Features";
import Textcenter from "./components/Textcenter";
import Uicenter from "./components/Uicenter";
import Exit from "./components/Exit";

import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        
      </Routes>
      <Services/>
      <Features/>
      <Textcenter/>
      <Uicenter/>
      <Exit/>
      <Footer/>
    </>
  );
}

export default App;
