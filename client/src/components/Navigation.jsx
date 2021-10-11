import React from "react";
import { Link, withRouter } from "react-router-dom";

function Navigation(props) {
  return (
    <div className="navigation">
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <div className="container">
          <Link className="navbar-brand" to="/">
            Track yo cals
          </Link>

          <div>
            <ul className="navbar-nav ml-auto">
              <li
                className={`nav-item  ${
                  props.location.pathname === "/" ? "active" : ""
                }`}
              >
                <Link className="nav-link" to="/">
                  Home
                  <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li
                className={`nav-item  ${
                  props.location.pathname === "/about" ? "active" : ""
                }`}
              >
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li
                className={`nav-item  ${
                  props.location.pathname === "/register" ? "active" : ""
                }`}
              >
                <Link className="nav-link" to="/register">
                  Sign Up
                </Link>
              </li>
              <li
                className={`nav-item  ${
                  props.location.pathname === "/login" ? "active" : ""
                }`}
              >
                <Link className="nav-link" to="/login">
                  Log In
                </Link>
              </li>
              <li
                className={`nav-item  ${
                  props.location.pathname === "/food" ? "active" : ""
                }`}
              >
                <Link className="nav-link" to="/food">
                  Food
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default withRouter(Navigation);