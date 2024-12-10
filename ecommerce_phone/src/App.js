import "./App.css";
import React from "react";
import Header from "./components/Header.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login.js";
import ProductDetail from './components/ProductDetail';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          {/* Route cho trang login */}
          <Route path="/login" element={<Login />} />
          
          {/* Route cho trang ProductDetail */}
          <Route path="/product-detail" element={<ProductDetail />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
