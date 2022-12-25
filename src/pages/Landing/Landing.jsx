import React from "react";
import "./landing.scss";

//estaría bueno que sean iconos con el titulo chiquito abajo asi pueden ir a partir de ahi
import { categoryData } from "./category-data";
import CategoryAnchor from "../../components/Categories_Anchor/Categories_Anchor";

import btnIcon from "../../assets/PDF-CV/menu.png";
import MenuPdf from "../../assets/PDF-CV/CV-RodrigoOrozco-Frontend.pdf";

const Landing = () => {
  return (
    <div className="landing-container layout-primary">
      <h1 className="title-menu heading-primary">Bienvenidos a nuestro menu</h1>
      <p className="text-menu">
        {" "}
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin aliquet
        turpis non sapien elementum tincidunt.{" "}
      </p>
      <div className="categories-container">
        {categoryData.map((category, i) => (
          <CategoryAnchor name={category.name} icon={category.icon} key={i} />
        ))}
      </div>
      <button className="btn-orange">
        <img src={btnIcon} alt="" className="btn-orange__icon" />
        <a href={MenuPdf} download={"CV-RodrigoOrozco-Frontend.pdf"}>
          Descargar menú
        </a>
      </button>
    </div>
  );
};

export default Landing;
