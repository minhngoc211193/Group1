import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
      <div class="container w-100">
        <a class="navbar-brand" href="#">
          ZIndex.
        </a>

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
          <input
            class="fs-3 me-3 search"
            type="text"
            placeholder="   Search..."
            name=""
            id=""
          />
          <Link type="button" to="/search" class="btn me-5 fs-2">
            Search
          </Link>
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <Link class="nav-link fs-2" to="/">
                Home
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link fs-2" to="/about">
                About
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link fs-2" to="/blog">
                Blog
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link fs-2" to="/contact">
                Contact
              </Link>
            </li>
          </ul>
          <Link type="button" to="/login" class="btn ms-3 fs-2">
            Sign in
          </Link>
          <Link type="button" to="/register" class="btn ms-3 fs-2">
            Register
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
