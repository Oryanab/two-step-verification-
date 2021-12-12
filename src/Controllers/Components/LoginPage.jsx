import React from "react";
import SignUp from "./SignUp";
import Login from "./Login";

export default function LoginPage() {
  return (
    <div className="center-div">
      <h1>Login/Register</h1>
      <SignUp />
      <Login />
    </div>
  );
}
