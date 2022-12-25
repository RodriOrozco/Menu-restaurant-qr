import React from "react";
import "./banner_menu.scss";

const Banner_Menu = ({ title, description, image }) => {
  return (
    <div className="banner-menu">
      <h2 className="heading-secondary">{title}</h2>
      <p>{description}</p>
      <img src={image} alt="" className="bg-image" />
    </div>
  );
};

export default Banner_Menu;
