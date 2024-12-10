import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = ({ setIsLogin }) => { 
  const [users, setUsers] = useState([]);
  const [isLoginFail, setIsLoginFail] = useState(false);
  const navigate = useNavigate();

  const usernameRef = useRef();
  const passwordRef = useRef();

  const handleLogin = (e) => {
    e.preventDefault();
    const username = usernameRef.current.value;
    const password = passwordRef.current.value;

    const user = users.find(
      (u) => u.username === username && u.password === password
    );

    if (user) {
      setIsLogin(true); 
      if (user.role === 'admin') {
        navigate('/admin'); 
      } else if (user.role === 'user') {
        navigate('/user'); 
      }
    } else {
      setIsLoginFail(true); 
    }
  };

  useEffect(() => {
    fetch('./user.json')
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error('Error fetching user data:', error));
  }, []);

  return (
    <div>
      <h2>Login</h2>
      <form className="w-50" method="POST">
        <div className="form-group">
          <label htmlFor="username" className="form-label">Username</label>
          <input name="username" id="username" className="form-control" ref={usernameRef} />
        </div>
        <div className="form-group">
          <label htmlFor="password" className="form-label">Password</label>
          <input name="password" id="password" className="form-control" ref={passwordRef} />
        </div>
        {isLoginFail && <p>Login Fail</p>}
        <button onClick={handleLogin}>Login</button>
      </form>
    </div>
  );
};

export default Login;
