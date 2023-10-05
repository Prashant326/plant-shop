import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./plantdetails.css";
import axios from "axios";

const Plantdetails = () => {
  const places = JSON.parse(localStorage.getItem("purchase"));

  const navigate = useNavigate();

  const [qty_Number, setqty_Number] = useState(1);

  const incrementQty = () => {
    setqty_Number(qty_Number + 1);
  };
  const decrementQty = () => {
    if (qty_Number > 1) {
      setqty_Number(qty_Number - 1);
    }
  };

  const handleCart = () => {
    let cart_item = { product_id: places.id, product_qty: qty_Number };
    let user = JSON.parse(localStorage.getItem("user"));

    let flag = false;

    for (let i = 0; i < user.cart.length; i++) {
      if (user.cart[i].product_id === cart_item.product_id) {
        flag = true;
        user.cart[i].product_qty += cart_item.product_qty;
      }
    }
    if (!flag) {
      user.cart.push(cart_item);
    }

    localStorage.setItem("user", JSON.stringify(user));
    axios
      .post("http://localhost:4000/cartupdate", user, {
        headers: {
          "content-type": "application/json",
        },
      })
      .catch((error) => {
        console.log(error);
      });
    navigate("/plants/cart");
  };

  return (
    <div>
      <div className="container_detail">
        <div className="left-column">
          <img
            data-image="red"
            className="active"
            src={places.image}
            alt="plant"
          />
        </div>

        <div className="right-column">
          <div className="product-description">
            <h1>{places.name}</h1>
            <p>{places.description}</p>
          </div>

          <div className="product-configuration">
            <div className="cable-config">
              <div className="cable-choose">
                <button>Seeds</button>
                <button>Plant</button>
                <button>Fertilizer</button>
              </div>
            </div>
          </div>
          <div>
            <span className="price_tag">
              Price : Rs. {places.price * qty_Number}
            </span>
          </div>

          <div className="pack-wrap">
            <p className="qty-text">Add Quantity</p>
            <div className="qty-wrap">
              <button className="qty-btn" onClick={decrementQty}>
                <i className="fa fa-minus" aria-hidden="true"></i>
              </button>
              <input
                type="number"
                className="number1"
                min="1"
                value={qty_Number}
              />
              <button className="qty-btn" onClick={incrementQty}>
                <i className="fa fa-plus" aria-hidden="true"></i>
              </button>
            </div>
          </div>
          <div className="product-price">
            <Link to="/" className="cart-btn">
              Buy Now
            </Link>
            <button onClick={handleCart} className="cart-btn">
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Plantdetails;
