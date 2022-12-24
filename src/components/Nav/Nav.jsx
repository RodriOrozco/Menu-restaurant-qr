import React from "react";
import "./nav.scss";

import Logo from "../../assets/logo.png";
import Hamburger_Icon from "../Hamburger_Icon/Hamburger_Icon";

const Nav = () => {
  return (
    <div className="nav-container">
      <img src={Logo} alt="" loading="Lazy" className="nav-container__logo" />
      <Hamburger_Icon />
    </div>
  );
};

export default Nav;
