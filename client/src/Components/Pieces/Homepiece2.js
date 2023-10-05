import React from "react";
import "./homepiece2.css"
import imcc7 from "./images/circle_images/7.webp"
import imcc8 from "./images/circle_images/8.webp"
import imcc9 from "./images/circle_images/9.webp"
import imcc10 from "./images/circle_images/10.webp"
import imcc11 from "./images/circle_images/11.webp"
import imcc12 from "./images/circle_images/12.webp"

const Homepiece2 = () => {
  return (
    <div>
      <div className="container_hp2">
        <div className="outer-div_hp2">
          <div className="inner-div_hp2">
            <img src={imcc7} alt="Image1" className="circle_img2" />
          </div>
          Palanthea Plant
        </div>
        <div className="outer-div_hp2">
          <div className="inner-div_hp2">
            <img src={imcc8} alt="Image2" className="circle_img2" />
          </div>
          Office Plants
        </div>
        <div className="outer-div_hp2">
          <div className="inner-div_hp2">
            <img src={imcc9} alt="Image3" className="circle_img2" />
          </div>
          Artificial Flowers
        </div>
        <div className="outer-div_hp2">
          <div className="inner-div_hp2">
            <img src={imcc10} alt="Image4" className="circle_img2" />
          </div>
          Garden Plants
        </div>
        <div className="outer-div_hp2">
          <div className="inner-div_hp2">
            <img src={imcc11} alt="Image5" className="circle_img2" />
          </div>
          House Plants
        </div>
        <div className="outer-div_hp2">
          <div className="inner-div_hp2">
            <img src={imcc12} alt="Image6"  className="circle_img2"/>
          </div>
          New Collection
        </div>
      </div>
    </div>
  );
};

export default Homepiece2;
