import React from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  let navigate = useNavigate();
  return (
    <div className="center-div">
      <h2>Login:</h2>
      <br />
      <label htmlFor="email">Enter your Email: </label>
      <input type="email" name="email" />
      <br />
      <label htmlFor="password">Enter your Password:</label>
      <input type="text" name="password" />
      <br />
      <button onClick={() => navigate("/2fa")}>Login Now</button>
    </div>
  );
}

export default Login;
