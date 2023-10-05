import React from "react";
import "./homepiece1.css";
import imc1 from "./images/cardimg/leaf.png";
import imc2 from "./images/cardimg/tap.jpg";
import imc3 from "./images/cardimg/1leaf.jpg";
import imc4 from "./images/cardimg/excellent.jpg";

const Homepiece1 = () => {
  return (
    <div>
      <div className="card-container_hp">
        <div className="main_hp main1_hp">
          <img src={imc1} alt="Quality Products"  className="img_hp1"/>
          <h3>Quality Products</h3>
          <p>Offering you the biggest choice of plants.</p>
          <p>
            Join us for one of our open days and find a plant and quality
            products that suit your garden.
          </p>
        </div>
        <div className="main_hp main2_hp">
          <img src={imc2} alt="Always Fresh" className="img_hp1" />
          <h3>Always Fresh</h3>
          <p>Add greenery to your indoor spaces.</p>
          <p>
            Make your garden a place to sit back and enjoy by adding a
            comfortable garden bench for relaxing.
          </p>
        </div>
        <div className="main_hp main3_hp">
          <img src={imc3} alt="Spring Inspiration" className="img_hp1"/>
          <h3>Spring Inspiration</h3>
          <p>Relax in your garden.</p>
          <p>
            Add more color and interest to your early spring garden using plants
            that flower in March.
          </p>
        </div>
        <div className="main_hp main4_hp">
          <img src={imc4} alt="Excellent Services" className="img_hp1"/>
          <h3>Excellent Services</h3>
          <p>Providing the best collection and service.</p>
          <p>
            Our curated collection ranges from plants gifted to treats for the
            home, helping you find the ideal gift.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Homepiece1;
