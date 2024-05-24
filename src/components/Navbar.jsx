//import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-primary text-light">
      <a className="navbar-brand text-light" href="#">
        Navbar
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse text-light" id="navbarNav">
        <ul className="navbar-nav text-light">
          <li className="nav-item active text-light">
            <a className="nav-link text-light" href="#">
              Home <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item text-light">
            <a className="nav-link text-light " href="#">
              Features
            </a>
          </li>
          <li className="nav-item text-light">
            <a className="nav-link text-light" href="#">
              Pricing
            </a>
          </li>
          <li className="nav-item text-light">
            <a className="nav-link disabled text-light" href="#">
              Disabled
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
