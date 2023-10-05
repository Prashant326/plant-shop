import React from "react";
import "./pieces1.css";
import i1 from "./plant.png";
import i2 from "./i2.png";
import i3 from "./trophy.png";
import i4 from "./shipped.png";

const Pieces1 = () => {
  return (
    <div className="layout2">
      <div className="card_p">
        <div className="card_load_p">
          <img src={i1} alt="i1" />
        </div>
        <div className="card_pack">
          <div className="card_load_extreme_title_p">High Quality Plants</div>
          <div className="card_load_extreme_descripion_p">
            A line about the service you've mentioned above.
          </div>
        </div>
      </div>
      <div className="card_p">
        <div className="card_load_p">
          <img src={i2} alt="i1" />
        </div>
        <div className="card_pack">
          <div className="card_load_extreme_title_p">Wide Plant Range</div>
          <div className="card_load_extreme_descripion_p">
            A line about the service you've mentioned above.
          </div>
        </div>
      </div>
      <div className="card_p">
        <div className="card_load_p">
          <img src={i3} alt="i1" />
        </div>
        <div className="card_pack">
          <div className="card_load_extreme_title_p">Excellent Services</div>
          <div className="card_load_extreme_descripion_p">
            A line about the service you've mentioned above.
          </div>
        </div>
      </div>
      <div className="card_p">
        <div className="card_load_p">
          <img src={i4} alt="i1" />
        </div>
        <div className="card_pack">
          <div className="card_load_extreme_title_p">Fast Delivery</div>
          <div className="card_load_extreme_descripion_p">
            A line about the service you've mentioned above.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pieces1;
