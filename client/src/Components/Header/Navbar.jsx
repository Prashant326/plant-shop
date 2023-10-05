import React from "react";
import "./navbar.css";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const auth = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();
  const logout = () => {
    localStorage.clear();
    navigate("/signup");
  };

  var cart_length1=0;
  if (auth != null) {
    if(auth.cart.length>0)
    {
       cart_length1 = auth.cart.length;
    }
  }

  return (
    <div>
      <nav className="navbar">
        <input type="checkbox" id="check" />
        <label className="checkbtn">
          <i className="fa fa-bars"></i>
        </label>
        <div className="logo">
          <p className="logo_name">Plantopia</p>
        </div>
        <ul className="menu">
          <li className="menu-item">
            <Link to="/" className="menu-link">
              Home
            </Link>
          </li>
          <li className="menu-item">
            <Link to="/plants" className="menu-link">
              Plants
            </Link>
          </li>
          <li className="menu-item">
            <Link to="/contact" className="menu-link">
              Contact
            </Link>
          </li>

          {auth ? (
            <>
              <li className="menu-item">
                <Link to="/plants/cart" className="menu-link">
                  Cart <span>({cart_length1})</span>
                </Link>
              </li>

              <li className="menu-item">
                <Link to="/signup" onClick={logout} className="menu-link">
                  Logout
                </Link>
              </li>
            </>
          ) : (
            <>
              <li className="menu-item">
                <Link to="/signup" className="menu-link">
                  Sign Up
                </Link>
              </li>
              <li className="menu-item">
                <Link to="/login" className="menu-link">
                  Login
                </Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
