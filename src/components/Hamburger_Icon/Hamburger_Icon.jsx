import React from "react";
import "./hamburger_icon.scss";

import LogoMenu from "../../assets/logo.png";

const Hamburger_Icon = () => {
  return (
    <div className="hamburger-menu">
      <input id="menu__toggle" type="checkbox" />
      <label className="menu__btn" htmlFor="menu__toggle">
        <span></span>
      </label>

      <ul className="menu__box">
        <img src={LogoMenu} alt="" className="menu__box__logomenu" />
        <li>
          <a className="menu__item" href="#">
            Home
          </a>
        </li>
        <li>
          <a className="menu__item" href="#">
            About
          </a>
        </li>
        <li>
          <a className="menu__item" href="#">
            Team
          </a>
        </li>
        <li>
          <a className="menu__item" href="#">
            Contact
          </a>
        </li>
        <li>
          <a className="menu__item" href="#">
            Twitter
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Hamburger_Icon;
