import React from "react";
import "./categories_anchor.scss";

import EntradaIcon from "../../assets/categories_icon/entradas.png";

const Categories_Anchor = () => {
  return (
    <div className="category">
      <img src={EntradaIcon} alt="categoria" className="category__image" />
      <p className="category__paragraph">Entradas</p>
    </div>
  );
};

export default Categories_Anchor;
