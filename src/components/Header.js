import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import { useState } from "react";


const Header = () => {

  const[button , setButton]=useState("Login")

    return (
      <div className="header">
        <div className="logo-box">
          <img className="logo" src={LOGO_URL}></img>
        </div>
        <div className="nav-items">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/cart">Cart</Link></li>
            <button className="login-btn" onClick={()=>{
          button === "Login"? setButton("Logout") : setButton("Login")}}>{button}</button>
          </ul>
        </div>
      </div>
    );
  };


export default Header;