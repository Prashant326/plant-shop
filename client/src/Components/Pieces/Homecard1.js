import React from "react";
import "./homcard.css";
import fim1 from "./images/homeimg/flowerpot1.jpg";
import fim2 from "./images/homeimg/flowerpot2.jpg";
import fim3 from "./images/homeimg/flowerpot3.jpg";
import { Link } from "react-router-dom";

const Homecard1 = () => {
  return (
    <div>
      <div className="card-container_p1">
        <div className="container">
          <img src={fim1} alt="Cardimg" width="450px" height="300px" />
          <div className="bottom-left b1">
            <h3>FRESH FLOWER</h3>
            <p>Hanging Plant</p>
            <Link to="/plants" className="shop-now-button">
              SHOP NOW
            </Link>
          </div>
        </div>
        <div className="container">
          <img src={fim2} alt="Cardimg" width="450px" height="300px" />
          <div className="bottom-left b2">
            <h3>SALE OFF</h3>
            <p>Morden Plant</p>
            <Link to="/plants" className="shop-now-button">
              SHOP NOW
            </Link>
          </div>
        </div>
        <div className="container">
          <img src={fim3} alt="Cardimg" width={450} />
          <div className="bottom-left b3">
            <h3 className="black-text">JUST FOR YOU</h3>
            <p className="black-text">Indoor Plant</p>
            <Link to="/plants" className="shop-now-button">
              SHOP NOW
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homecard1;
