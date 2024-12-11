import "./App.css";
import React, { useState } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login.js";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import Main from "./components/Main.js";
import Section from "./components/Section.js";
import Home from "./page/Home.js";
import About from "./page/About.js";
import Detail from "./page/Detail.js";

function App() {
  const [setIsLogin] = useState(false);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/detail:id" element={<Detail />} />
      </Routes>
      <Routes>
        <Route path="/login" element={<Login setIsLogin={setIsLogin} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
