import React from "react";
import "./menu.scss";

import BannerMenu from "../../components/Banner_Menu/Banner_Menu";
import PriceListMenu from "../../components/Price_List_Menu/Price_List_Menu";

import { menuData } from "./menu-data";

const Menu = () => {
  return (
    <>
      {menuData.map((menu, i) => (
        <div className="menu-container layout-primary" key={i} id={menu.title}>
          <BannerMenu
            title={menu.title}
            description={menu.description}
            image={menu.image}
          />
          <PriceListMenu options={menu.options} />
        </div>
      ))}
    </>
  );
};

export default Menu;
