import React, { useState } from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import "./App.css";
import Home from "./Components/Landing";
import Products from "./Components/Products";
import Cart from "./Components/Cart";
import RegisterPage from "./Components/RegisterPage";
import LoginPage from "./Components/LoginPage";
import Help from "./Components/Help";

const App = () => {
  const navigate = useNavigate();

  const handleRegisterClick = () => {
    navigate("/register");
  };

  const handleLoginClick = () => {
    navigate("/login");
  };

  const [showPopup, setShowPopup] = useState(false);

  return (
    // nav bar
    <div className="App">
      <div className="topnav">
        <nav>
          <ul>
            <li>
              <Link to="/">
                <b>Home</b>
              </Link>
            </li>
            <li>
              <Link to="/products">
                <b>Products</b>
              </Link>
            </li>
            <li>
              <Link to="/cart">
                <b>Cart</b>
              </Link>
            </li>
          </ul>
        </nav>
        <div className="Buttons">
          <button className="RegisterBtn" onClick={handleRegisterClick}>
            <b>Register</b>
          </button>
          <button className="LoginBtn" onClick={handleLoginClick}>
            <b>Login</b>
          </button>
        </div>
      </div>
      <div className="content">
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </div>
      {/*Help button*/}
      <button onClick={() => setShowPopup(true)} className="info-btn">
        Support
      </button>
      <Help
        className="helpPopup"
        show={showPopup}
        onClose={() => setShowPopup(false)}
      >
        <h2> Shipping Options</h2>
        <ul>
          <li>Standard Delivery: £3.99 (3-5 working days)</li>
          <li>Express Delivery: £5.99 (2-3 working days)</li>
          <li>Next Day Delivery: £7.99 (Order before 1pm)</li>
          <br />
          <li>Working Days: Mon-Fri (8am-6pm)</li>
        </ul>
      </Help>
    </div>
  );
};

export default App;
