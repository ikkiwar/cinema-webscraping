import React from "react";
import { Menubar } from "primereact/menubar";
import { items } from "./items";
import Movie from "../../assets/images/movie.png";
import "../menu/menu.css";
const Menu = () => {
  const start = (
    <img alt="logo" src={Movie} height="60" className="p-mr-2"></img>
  );
  const end = <span>Cinema WebScrapping</span>;
  return (
    <div className="card">
      <Menubar model={items} start={start} end={end} />
    </div>
  );
};
export default Menu;
