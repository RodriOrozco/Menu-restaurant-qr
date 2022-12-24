import React from "react";
import "./hamburger_icon.scss";

import LogoMenu from "../../assets/logo.png";
import Entrada from "../../assets/categories_icon/entradas.png";

import { categoryData } from "../../pages/Landing/category-data";

const Hamburger_Icon = () => {
  return (
    <div className="hamburger-menu">
      <input id="menu__toggle" type="checkbox" />
      <label className="menu__btn" htmlFor="menu__toggle">
        <span></span>
      </label>

      <ul className="menu__box">
        <img src={LogoMenu} alt="" className="menu__box__logomenu" />
        {categoryData.map((category) => (
          <li className="menu__box__li">
            <img src={category.icon} alt="" className="anchor-img" />
            <a className="anchor-text" href="#">
              {category.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Hamburger_Icon;
