import React from "react";
import "./landing.scss";

//el cliente se topa con las distintas categorias que tenemos en nuestra carta, estas son, entradas, ensaladas, plato principal, postres, bebidas

//estaría bueno que sean iconos con el titulo chiquito abajo asi pueden ir a partir de ahi
import CategoryAnchor from "../../components/Categories_Anchor/Categories_Anchor";

const Landing = () => {
  return (
    <div className="landing-container layout-primary">
      <h1 className="title-menu heading-primary">Bienvenidos a nuestro menu</h1>
      <div className="categories-container">
        <CategoryAnchor />
      </div>
    </div>
  );
};

export default Landing;
