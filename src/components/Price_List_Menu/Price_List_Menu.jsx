import React from "react";
import "./price_list_menu.scss";

const Price_List_Menu = ({ options }) => {
  return (
    <>
      {options.map((option, i) => (
        <div className="pricing-container" key={i}>
          <div className="pricing-container__price">
            <h3 className="name-food heading-tertiary">{option.name}</h3>
            <h3 className="price-food heading-tertiary">{`... ${option.price}`}</h3>
          </div>
          <p className="pricing-container__description">
            {option.foodDescription}
          </p>
        </div>
      ))}
    </>
  );
};

export default Price_List_Menu;
