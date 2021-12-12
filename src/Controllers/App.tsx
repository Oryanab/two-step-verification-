import LoginPage from "./Components/LoginPage";
import TwoFactor from "./Components/TwoFactor";
import React, { useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";

function App() {
  const [isConnected, setIsConnected] = useState(false);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/2fa" element={<TwoFactor />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
