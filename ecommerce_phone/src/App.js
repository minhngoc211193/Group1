import "./App.css";
import React, { useState } from "react";

import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Login from "./components/Login.js";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
// import Home from "./page/Home.js";

function App() {
  const [setIsLogin] = useState(false);
  const ConditionalHeader = () => {
    const location = useLocation();
    return location.pathname === "/home" ? <Header/> :null;
  }

  return (
    <BrowserRouter>
      <ConditionalHeader/>
      <Routes>
        <Route path="/login" element={<Login setIsLogin={setIsLogin} />} />

      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
