import React, { useRef } from "react";

function SignUp() {
  return (
    <div>
      <h2>Sign Up:</h2>
      <br />
      <label htmlFor="email">Enter your Email: </label>
      <input type="email" name="email" />
      <br />
      <label htmlFor="password">Enter your Password:</label>
      <input type="text" name="password" />
      <br />
      <button>Join Now</button>
    </div>
  );
}

export default SignUp;
