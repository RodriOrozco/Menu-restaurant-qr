import React from "react";
import "./menu.scss";

import BannerMenu from "../../components/Banner_Menu/Banner_Menu";
import PriceListMenu from "../../components/Price_List_Menu/Price_List_Menu";

const Menu = () => {
  return (
    <div className="menu-container layout-primary">
      <BannerMenu />
      <PriceListMenu />
    </div>
  );
};

export default Menu;
