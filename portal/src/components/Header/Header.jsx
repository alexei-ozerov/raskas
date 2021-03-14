import React from "react";
import "./Header.scss";
import logo from "../../assets/key.png"

const Header = () => (
    <div className="header">
        <div className="container">
            <h1>Raskas <img src={logo} height="50" alt="Raskas logo" /></h1>
            <hr />
        </div>
    </div>
  
);

export default Header;