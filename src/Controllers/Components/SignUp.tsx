import React, { useRef, useEffect, HTMLInputTypeAttribute } from "react";

function SignUp() {
  const signUpUser = () => {
    const form: HTMLFormElement = document.querySelector("#SignUpForm")!;
    const formData = new FormData(form);
    fetch("http://localhost:8000/sign-up", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: formData.get("emailSignUp") as string,
        password: formData.get("passwordSignUp") as string,
        twoFactorAuth: false,
      }),
    })
      .then((response) => {
        form.reset();
        alert("success");
      })
      .catch((err) => {
        alert(err);
      });
  };
  return (
    <div className="center-div">
      <h2>Sign Up:</h2>
      <br />
      <form id="SignUpForm">
        <label htmlFor="emailSignUp">Enter your Email: </label>
        <input type="email" name="emailSignUp" />
        <br />
        <label htmlFor="passwordSignUp">Enter your Password:</label>
        <input type="text" name="passwordSignUp" />
        <br />
        <button
          onClick={(e) => {
            e.preventDefault();
            signUpUser();
          }}
          type="submit"
        >
          Join Now
        </button>
      </form>
    </div>
  );
}

export default SignUp;
