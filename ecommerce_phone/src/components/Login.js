import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import userData from '../user.json';

const Login = ({ setIsLogin }) => {
  const nav = useNavigate();

  const [isLoginFail, setIsLoginFail] = useState(false);

  const usernameRef = useRef();
  const passwordRef = useRef();

  const handleLogin = (e) => {
    e.preventDefault();
    const username = usernameRef.current.value;
    const password = passwordRef.current.value;
    
    if (userData.username === username && userData.password === password) {
      setIsLogin(true);  
      nav("/home");  
    } else {
      setIsLoginFail(true);  
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form className="w-50" method="POST">
        <div className="form-group">
          <label htmlFor="username" className="form-label">Username</label>
          <input 
            name="username" 
            id="username" 
            className="form-control" 
            ref={usernameRef} 
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="password" className="form-label">Password</label>
          <input 
            name="password" 
            id="password" 
            className="form-control" 
            ref={passwordRef} 
            type="password" 
          />
        </div>

        {isLoginFail && <p style={{ color: 'red' }}>Login Fail</p>}
        <button onClick={handleLogin}>Login</button>
      </form>
    </div>
  );
};

export default Login;
