import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  
  const navigate = useNavigate();

  useEffect(() => {
    const auth = localStorage.getItem("user");
    if (auth) {
      navigate("/"); 
    }
  });

  const handlelogin = async (event) => {
    event.preventDefault();
    try {
      let result = await axios.post("http://localhost:4000/login", {
        mail,
        password,
      });
     
      setMail("");
      setPassword("");
      console.log(result)
      if (result.data.result!=="NO user Found !") {
        alert("Done");
        localStorage.setItem("user", JSON.stringify(result.data));
        navigate("/");
      } else {
        alert("Enter valid id pass");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container_sign">
      <div className="registration_sign form_sign">
        <header className="header_sign">Login</header>
        <form onSubmit={handlelogin}>
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
            Login
          </button>
        </form>
        <div className="signup_sign">
          <span className="signup_sign">
            Don't have an account?
            <Link to="/signup" className="link_sign">
              Signup
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Login;
