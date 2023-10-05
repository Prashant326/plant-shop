import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";

const Footer_ = () => {
  return (
    <div className="footer-body">
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="footer-col">
              <h4>company</h4>
              <ul>
                <li>
                  <Link to="/">about us</Link>
                </li>
                <li>
                  <Link to="/">our services</Link>
                </li>
                <li>
                  <Link to="/">privacy policy</Link>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>get help</h4>
              <ul>
                <li>
                  <Link to="/">FAQ</Link>
                </li>
                <li>
                  <Link to="/">shipping</Link>
                </li>
                <li>
                  <Link to="/">returns</Link>
                </li>
                <li>
                  <Link to="/">order status</Link>
                </li>
                <li>
                  <Link to="/">payment options</Link>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>online shop</h4>
              <ul>
                <li>
                  <Link to="/plants">Plant</Link>
                </li>
                <li>
                  <Link to="/">Seeds</Link>
                </li>
                <li>
                  <Link to="/">machine</Link>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>follow us</h4>
              <div className="social-links">
                <Link to="/">
                  <i className="fa fa-facebook-f" />
                </Link>
                <Link to="/">
                  <i className="fa fa-twitter" />
                </Link>
                <Link to="/">
                  <i className="fa fa-instagram" />
                </Link>
                <Link to="/">
                  <i className="fa fa-whatsapp" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer_;
