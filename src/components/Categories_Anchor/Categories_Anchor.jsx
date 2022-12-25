import React from "react";
import "./categories_anchor.scss";

const Categories_Anchor = ({ name, icon }) => {
  return (
    <div className="category" key={name}>
      <a href={`#${name}`} className="enlace-banner">
        <img src={icon} alt="categoria" className="category__image" />
        <p className="category__paragraph">{name}</p>
      </a>
    </div>
  );
};

export default Categories_Anchor;
