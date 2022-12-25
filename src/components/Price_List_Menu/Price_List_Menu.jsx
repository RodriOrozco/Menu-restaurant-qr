import React from "react";
import "./price_list_menu.scss";

const Price_List_Menu = () => {
  return (
    <div className="pricing-container">
      <div className="pricing-container__price">
        <h3 className="name-food heading-tertiary">longaniza asada</h3>
        <h3 className="price-food heading-tertiary">... $145</h3>
      </div>
      <p className="pricing-container__description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
    </div>
  );
};

export default Price_List_Menu;
