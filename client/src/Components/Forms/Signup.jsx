import React, { useEffect, useState } from "react";
import "./signup.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const auth = localStorage.getItem("user");
    if (auth) {
      navigate("/");
    }
  });

  const handleSignup = async (event) => {
    event.preventDefault();
    try {
      var result={};
      await axios.post("http://localhost:4000/signup", {
        username,
        mail,
        password,
      }).then((data)=>{result=data} );

      setUsername("");
      setMail("");
      setPassword("");

      if (result.data) {
        console.log(result.data);
        localStorage.setItem("user", JSON.stringify(result.data));
        navigate("/");
      }
    } catch (error) {
      console.log("Error : ", error);
    }
  };

  return (
    <div className="container_sign">
      <div className="registration_sign form_sign">
        <header className="header_sign">Signup</header>
        <form onSubmit={handleSignup}>
          <input
            type="text"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="input_sign"
          />
          <input
            type="email"
            placeholder="Enter your email"
            value={mail}
            onChange={(e) => setMail(e.target.value)}
            className="input_sign"
          />
          <input
            type="password"
            placeholder="Create a password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input_sign"
          />

          <button type="submit" className="button_sign">
            Signup
          </button>
        </form>
        <div className="signup_sign">
          <span className="signup_sign">
            Already have an account?
            <Link to="/login" className="link_sign">
              Login
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Signup;
