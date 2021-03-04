import React from "react";
import { Menubar } from "primereact/menubar";
import { items } from "./items";
import Movie from "../../assets/images/movie.png";
import "../menu/menu.css";
const Menu = () => {
  const start = (
    <img alt="logo" src={Movie} height="60" className="p-mr-2"></img>
  );
  return (
    <div className="card">
      <Menubar model={items} start={start} />
    </div>
  );
};
export default Menu;
