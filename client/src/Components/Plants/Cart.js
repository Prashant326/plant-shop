import React, { useEffect, useState } from "react";
import "./cart.css";
import plants from "./Plants Details.json";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Cart = () => {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [cname, setCname] = useState("");
  const [country, setCounty] = useState("");
  const [hname, setHname] = useState("");
  const [apartname, setApartname] = useState("");
  const [city, setCity] = useState("");
  const [state, setstate] = useState("");
  const [pin, setPin] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [couponc, setCouponc] = useState("");
  const [payment, setPayment] = useState("");

  const [plantdtl, setPlantDtl] = useState([]);

  {
    /* Here is Database code */
  }
  const axois_data = (args) => {
    axios
      .post("http://localhost:4000/cartupdate", args, {
        headers: {
          "content-type": "application/json",
        },
      })
      .then(() => {
        alert("Orderplaced");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const navigate = useNavigate();

  let temp1 = [];

  let user = JSON.parse(localStorage.getItem("user"));

  const deleteProduct = (item) => {
    for (let i = 0; i < user.cart.length; i++) {
      if (user.cart[i].product_id !== item.id) {
        temp1.push(user.cart[i]);
      }
    }
    user.cart = temp1;
    localStorage.setItem("user", JSON.stringify(user));
    axois_data(user);
    temp1 = [];
    window.location.reload();
  };

  var tempprice = 0;
  var grandtotal = 0;
  for (let i = 0; i < user.cart.length; i++) {
    for (let j = 0; j < plants.length; j++) {
      if (user.cart[i].product_id === plants[j].id) {
        tempprice =
          parseInt(plants[j].price) * parseInt(user.cart[i].product_qty);
        grandtotal = grandtotal + tempprice;
      }
    }
  }

  useEffect(() => {
    let temp1 = [];
    for (let i = 0; i < plants.length; i++) {
      for (let j = 0; j < user.cart.length; j++) {
        if (plants[i].id === user.cart[j].product_id) {
          let temp = plants[i];
          temp["product_qty"] = user.cart[j].product_qty;
          temp1.push(temp);
        }
      }
    }
    setPlantDtl([...temp1]);
  }, []);

  const payent_handle = (event) => {
    setPayment(event.target.value);
  };

  const handledata_submit = (e) => {
    e.preventDefault();
    user.cart = [];
    localStorage.setItem("user", JSON.stringify(user));

    axois_data(user);

    navigate("/orderplaced");
  };

  return (
    <>
      <table className="cart_table">
        <thead>
          <tr>
            <th className="th">Item</th>
            <th className="th">Price</th>
            <th className="th">Quantity</th>
            <th className="th">Total</th>
          </tr>
        </thead>
        <tbody>
          {plantdtl.map((info) => {
            return (
              <>
                <tr>
                  <td className="td">
                    <div className="wrap_cart">
                      <img src={info.image} alt="plant" width={100} />
                      <p className="plant_name">{info.name}</p>
                    </div>
                  </td>
                  <td className="td">R.s {info.price}</td>
                  <td className="td">
                    <div className="qty-wrap_cart">
                      <p>{info.product_qty}</p>
                    </div>
                  </td>
                  <td className="td">
                    <p>R.s {info.price * info.product_qty}</p>
                  </td>
                  <td className="td">
                    <button
                      className="remove_btn"
                      onClick={() => deleteProduct(info)}
                    >
                      <i
                        className="fa fa-trash"
                        id="remove"
                        aria-hidden="true"
                      ></i>
                    </button>
                  </td>
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
      <div className="order_wrap">
        <div className="title_or">
          <p className="title_or_p">Product Order Form</p>
        </div>
        <div className="d-flex_or">
          <form className="order_form" onSubmit={handledata_submit}>
            <div className="form-group">
              <input
                type="text"
                name="fname"
                placeholder="First Name"
                className="order_input"
                onChange={(e) => {
                  setFname(e.target.value);
                }}
                value={fname}
                required
              />
              <input
                type="text"
                name="lname"
                placeholder="Last Name"
                className="order_input"
                onChange={(e) => {
                  setLname(e.target.value);
                }}
                value={lname}
                required
              />
            </div>

            <div className="form-group">
              <input
                type="text"
                name="company_name"
                placeholder="Company Name (Optional)"
                className="order_input"
                onChange={(e) => {
                  setCname(e.target.value);
                }}
                value={cname}
                required
              />
              <select
                name="selection"
                placeholder="Country"
                className="order_input"
                onChange={(e) => {
                  setCounty(e.target.value);
                }}
                defaultValue={country}
                required
              >
                <option value="select">Select a country...</option>
                <option value="India">India</option>
                <option value="America">America</option>
                <option value="United States">United States</option>
                <option value="China">China</option>
                <option value="Russia">Russia</option>
                <option value="Germany">Germany</option>
                <option value="Japan">Japan</option>
                <option value="Israel">Israel</option>
              </select>
            </div>

            <div className="form-group">
              <input
                type="text"
                name="houseadd"
                value={hname}
                placeholder="House number and street name"
                className="order_input"
                onChange={(e) => {
                  setHname(e.target.value);
                }}
                required
              />
              <input
                type="text"
                name="apartment"
                value={apartname}
                placeholder="Apartment, suite, unit etc. (optional)"
                className="order_input"
                onChange={(e) => {
                  setApartname(e.target.value);
                }}
                required
              />
            </div>

            <div className="form-group">
              <input
                type="text"
                name="city"
                value={city}
                placeholder="Town / City"
                className="order_input"
                onChange={(e) => {
                  setCity(e.target.value);
                }}
                required
              />
              <input
                type="text"
                name="county"
                value={state}
                placeholder="State / County"
                className="order_input"
                onChange={(e) => {
                  setstate(e.target.value);
                }}
                required
              />
              <input
                type="number"
                name="pin"
                value={pin}
                placeholder="Postcode / ZIP"
                className="order_input"
                min={1}
                maxLength={6}
                onChange={(e) => {
                  setPin(e.target.value);
                }}
                required
              />
            </div>

            <div className="form-group">
              <input
                type="tel"
                name="phone_no"
                value={phone}
                placeholder="Phone"
                className="order_input"
                maxLength={10}
                onChange={(e) => {
                  setPhone(e.target.value);
                }}
                required
              />
              <input
                type="email"
                name="email"
                value={email}
                placeholder="Email Address"
                className="order_input"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                required
              />
            </div>

            <div className="form-group">
              <input
                type="text"
                name="coupon code"
                value={couponc}
                placeholder="coupon code"
                className="order_input"
                onChange={(e) => {
                  setCouponc(e.target.value);
                }}
              />
              <button className="order_btn order_input">Apply</button>
            </div>
          </form>
          <div className="order_table">
            <table>
              <tbody>
                <tr>
                  <th colSpan={2} className="table_th_or">
                    Your order
                  </th>
                </tr>
                <tr>
                  <td className="ot_td">Total</td>
                  <td className="ot_td">R.s {grandtotal}</td>
                </tr>
                <tr>
                  <td className="ot_td">Shipping</td>
                  <td className="ot_td">Free shipping</td>
                </tr>
              </tbody>
            </table>

            <div className="od_pay">
              <input
                type="radio"
                name="payment"
                value="Direct Bank Transfer"
                className="order_radio_btn"
                checked={payment === "Direct Bank Transfer"}
                onChange={payent_handle}
              />
              <p className="od_pay_radio">Direct Bank Transfer</p>
            </div>
            <p>
              Make your payment directly into our bank account. Please use your
              Order ID as the payment reference. Your order will not be shipped
              until the funds have cleared in our account.
            </p>
            <div className="od_pay">
              <input
                type="radio"
                name="payment"
                value="Cash on Delivery"
                className="order_radio_btn"
                checked={payment === "Cash on Delivery"}
                onChange={payent_handle}
              />
              <p className="od_pay_radio">Cash on Delivery</p>
            </div>
            <div className="od_pay">
              <input
                type="radio"
                name="payment"
                value="Paypal"
                className="order_radio_btn"
                checked={payment === "Paypal"}
                onChange={payent_handle}
              />
              <p className="od_pay_radio">Paypal</p>
              <img
                src="https://www.logolynx.com/images/logolynx/c3/c36093ca9fb6c250f74d319550acac4d.jpeg"
                alt=""
                width={110}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
