import React from "react";
import ReactDOM from "react-dom";
import "./Styles/index.css";
import App from "./Controllers/App";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";
import TwoFactor from "./Controllers/Components/TwoFactor";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/2fa" element={<TwoFactor />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
