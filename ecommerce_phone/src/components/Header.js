import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <a className="navbar-brand fs-1 mt-3" href="#">
          SPAMCONMEMAY
        </a>
        <div className="collapse navbar-collapse fs-3" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item me-5">
              <a className="nav-link" aria-current="page" href="/home">
                HOME
              </a>
            </li>
            <li className="nav-item me-5">
              <a className="nav-link" href="#">
                Service
              </a>
            </li>
            <li className="nav-item me-5">
              <a className="nav-link" href="#">
                Contact
              </a>
            </li>
            <li
              className="nav-item  btn-group "
              role="group"
              aria-label="Basic example"
            >

              <Link to="/login" >
                Login
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
