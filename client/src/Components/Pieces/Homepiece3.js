import React from "react";
import "./homepiece2.css"

import imcc1 from "./images/circle_images/1.png"
import imcc2 from "./images/circle_images/2.png"
import imcc3 from "./images/circle_images/3.png"
import imcc4 from "./images/circle_images/4.png"
import imcc5 from "./images/circle_images/5.png"
import imcc6 from "./images/circle_images/6.png"

const Homepiece3 = () => {
  return (
    <div>
      <div className="container_hp2">
        <div className="outer-div_hp2">
          <div className="inner-div_hp2">
            <img src={imcc1} alt="Image1" className="circle_img2" />
          </div>
          Plants
        </div>
        <div className="outer-div_hp2">
          <div className="inner-div_hp2">
            <img src={imcc2} alt="Image2" className="circle_img2"/>
          </div>
          Shovel &amp; Rake
        </div>
        <div className="outer-div_hp2">
          <div className="inner-div_hp2">
            <img src={imcc3} alt="Image3" className="circle_img2" />
          </div>
          Fertilizer
        </div>
        <div className="outer-div_hp2">
          <div className="inner-div_hp2">
            <img src={imcc4} alt="Image4"  className="circle_img2"/>
          </div>
          Seed Bag
        </div>
        <div className="outer-div_hp2">
          <div className="inner-div_hp2">
            <img src={imcc5} alt="Image5" className="circle_img2" />
          </div>
          Watering Can
        </div>
        <div className="outer-div_hp2">
          <div className="inner-div_hp2">
            <img src={imcc6} alt="Image6" className="circle_img2" />
          </div>
          Accessories
        </div>
      </div>
    </div>
  );
};

export default Homepiece3;
