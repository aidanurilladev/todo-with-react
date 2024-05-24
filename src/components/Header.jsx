import React from "react";
import foto from "../image/image 2.png";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div id="header">
      <div className="container">
        <div className="header">
          <img src={foto} alt="" />
          <div className="header-nav">
            <NavLink to="/">Menu</NavLink>
            <NavLink to="/order">Order</NavLink>
            <NavLink to="/admin">Admin</NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
