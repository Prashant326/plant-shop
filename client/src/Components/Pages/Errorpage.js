import React from "react";
import e1 from "./404_Error.svg"
import { Link } from "react-router-dom";
import "./errorcss.css"

const Errorpage = () => {
  return (
    <div className="center_error">
      <div className="container_error">
        <img src={e1} alt="404img" className="img404" />
        <p className="error_p">Sorry, the page you are looking for does not exist.</p>
        <Link to="/" className="shop-now-button1">
          Return to home
        </Link>
      </div>
    </div>
  );
};

export default Errorpage;
