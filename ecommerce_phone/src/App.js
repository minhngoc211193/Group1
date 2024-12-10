import './App.css';
import React, {useState} from 'react';
import Header from './components/Header.js';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Login from './components/Login.js';

function App () {
  const [setIsLogin] = useState(false);

  return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <Routes>
          <Route path="/login" element={<Login setIsLogin={setIsLogin} />} />
          </Routes>
        </div>
      </BrowserRouter>
  );
}

export default App;
