import React from "react";

function Login() {
  return (
    <div>
      <h2>Login:</h2>
      <br />
      <label htmlFor="email">Enter your Email: </label>
      <input type="email" name="email" />
      <br />
      <label htmlFor="password">Enter your Password:</label>
      <input type="text" name="password" />
      <br />
      <button>Login Now</button>
    </div>
  );
}

export default Login;
