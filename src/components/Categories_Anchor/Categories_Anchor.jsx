import React from "react";
import "./categories_anchor.scss";

const Categories_Anchor = ({ name, icon }) => {
  return (
    <div className="category">
      <img src={icon} alt="categoria" className="category__image" />
      <p className="category__paragraph">{name}</p>
    </div>
  );
};

export default Categories_Anchor;
