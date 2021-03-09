import React from "react";
import { Menubar } from "primereact/menubar";
import { items } from "./items";
import Movie from "../../assets/images/movie.png";
import "../menu/menu.css";
const Menu = () => {
  const start = (
    <div className="tittle-menu">
      <img alt="logo" src={Movie} height="40" className="p-mr-2"></img>
      <a style={{ marginLeft: "5px" }} href="/">
        Cinema WebScrapping
      </a>
    </div>
  );

  return (
    <div className="card">
      <Menubar model={items} start={start} />
    </div>
  );
};
export default Menu;
