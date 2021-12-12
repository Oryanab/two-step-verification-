import React from "react";

function TwoFactor() {
  return (
    <div className="center-div">
      <img
        src="https://chart.googleapis.com/chart?chs=166x166&chld=L|0&cht=qr&chl=otpauth://totp/amazing%20app%3A8f101584-1177-48b5-958e-e0e6efc0db01%3Fsecret=O7C6T6AA2A27CASYS6QMT6EYCQRFTPMZ%26issuer=amazing%20app"
        alt=""
      />
      <br />
      <label htmlFor="input">Scan The QR for Login:</label>
      <br />
      <input type="text" name="input" />
      <button>Login</button>
    </div>
  );
}

export default TwoFactor;
