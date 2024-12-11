import React, { useState, Navigate } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Home from "./page/Home";
import Header from "./components/Header.js";

function App() {
  const [isLogin, setIsLogin] = useState(false);

  // const ConditionalHeader = () => {
  //   const location = useLocation();
  //   return location.pathname === "/home" ? <Header /> : null;
  // };

  return (
    <Router>
      <Header />
      <div>
        <Routes>
          <Route 
            path="/login" 
            element={<Login setIsLogin={setIsLogin} />} 
          />
          <Route
            path="/home"
            element={isLogin ? <Home /> : <Navigate to={"/login"} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
