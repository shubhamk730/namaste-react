import React, { useState } from "react"
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
    const [btnName, setBtnName] = useState("Login");
    const onlineStatus = useOnlineStatus();

    return (
      <div className="header">
        <div className="logo-container">
          <img
            className="logo"
            src= {LOGO_URL}
            alt="app_logo"
          />
        </div>
  
        <div className="nav-items">
          <ul>
            <li>Online Status: {onlineStatus ? "✅" : "🔴"}</li>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/grocery'>Grocery</Link></li>
            <li><Link to='/about'>About us</Link></li>
            <li><Link to='/contact'>Contact us</Link></li>
            <li>Cart</li>
            <button className="login" onClick={() => {
              setBtnName(btnName === "Login"?"Logout":"Login")
            }} >{btnName}</button>
          </ul>
        </div>
      </div>
    );
  };

export default Header;