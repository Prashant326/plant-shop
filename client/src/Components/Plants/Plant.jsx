import React from "react";
import "./plant.css";
import { Link } from "react-router-dom";
import plants from "./Plants Details.json";

const Plant = () => {
  return (
    <div className="card-layout">
      {plants.map((info) => {
        return (
          <div className="card-list" key={info.id}>
            <div className="card">
              <figure className="card-image">
                <img
                  src={info.image}
                  alt="An orange painted blue, cut in half laying on a blue background"
                />
              </figure>
              <div className="card-header">
                <Link to="/" className="links">
                  {info.name}
                </Link>
                <p className="price_plant">₹{info.price}</p>
              </div>
              <div className="card-footer">
                <Link to={'/plants/product'} className="btn-buy" onClick={(e)=>{localStorage.setItem('purchase',JSON.stringify(info))}}>Buy Now</Link>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Plant;
