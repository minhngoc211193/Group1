import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
      <div class="container w-100">
        <a class="navbar-brand" href="#">ZIndex.</a>
        <input class="fs-3  ms-5" type="text" placeholder="Search..." name="" id=""/>
        <button class="btn btn-lg ms-1" >Search</button>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <Link class="nav-link fs-2" to="/">Home</Link>
            </li>
            <li class="nav-item">
            <Link class="nav-link fs-2" to="/about">About</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link fs-2" to="/blog">Blog</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link fs-2" to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <Link type="button" to="/login" class="btn me-1 fs-2">Sign in</Link>
        <Link type="button" to="/register" class="btn fs-2">Register</Link>
      </div>
    </nav>
  );
};

export default Header;
