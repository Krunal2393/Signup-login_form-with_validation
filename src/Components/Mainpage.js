import React from "react";
import { Link } from "react-router-dom";
import "./Mainpage.css";

function Mainpage() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
      <Link className="navbar-brand" to="#">
       <img src="/images/logo-2.png" alt="tecblic-logo"></img>
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav" >
        <ul className="navbar-nav mystyle"> 
          <li className="nav-item active">
            <Link className="nav-link"  to="/Signup">
              Signup
            </Link>
          </li>
          <li className="nav-item active">
            <Link className="nav-link" to="/Login">
              Login
            </Link>
          </li>
          <li className="nav-item active">
            <Link className="nav-link" to="/Home">
              Home
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Mainpage;
