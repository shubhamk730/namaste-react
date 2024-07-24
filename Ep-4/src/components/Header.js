import React, { useContext, useState } from "react"
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
    const [btnName, setBtnName] = useState("Login");
    const onlineStatus = useOnlineStatus();
    const data = useContext(UserContext);

    // subscribing to store using selector
    const cartItems = useSelector((store) =>  store.cart.items)

    return (
      <div className="flex justify-between bg-pink-100 shadow-lg sm:bg-yellow-50 lg:bg-green-50">
        <div className="logo-container p-1">
          <img
            className="w-24"
            src= {LOGO_URL}
            alt="app_logo"
          />
        </div>
  
        <div className="flex items-center">
          <ul className="flex p-4 m-4">
            <li className="px-4">Online Status: {onlineStatus ? "✅" : "🔴"}</li>
            <li className="px-4"><Link to='/'>Home</Link></li>
            <li className="px-4"><Link to='/grocery'>Grocery</Link></li>
            <li className="px-4"><Link to='/about'>About us</Link></li>
            <li className="px-4"><Link to='/contact'>Contact us</Link></li>
            <li className="px-4"><Link to='/cart'>Cart - ({cartItems.length} items)</Link></li>
            <button className="login" onClick={() => {
              setBtnName(btnName === "Login"?"Logout":"Login")
            }} >{btnName}</button>
            {btnName == "Logout" && <li className="px-4">{data.loggedInUser}</li>}
          </ul>
        </div>
      </div>
    );
  };

export default Header;