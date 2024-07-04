//import React from "react";
import { Link } from "react-router-dom";
import { IoHome } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light text-light ">
      <button className="navbar-brand text-dark bg-white rounded-2 p-2 ms-4  btn btn-primary btn-lg" href="#">
        Cart-iole
      </button>
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
          <Link to="/" className="nav-link text-light">
            <IoHome  />
            </Link>
          </li>
          <li className="nav-item text-light">
          <Link to="/cart-items"className="nav-link text-light" >
          < FaShoppingCart/>
          </Link>
          </li>
          <li className="nav-item text-light">
          <Link to="/contactus"className="nav-link text-light" >contactus</Link>
          </li>
          
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
