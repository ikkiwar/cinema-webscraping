import React, { Fragment } from "react";
import Menu from "../../components/menu/menu";
import "../home/home.css";
import { Button } from "primereact/button";
const Home = () => {
  return (
    <div className="home-style">
      <Menu />
      <div className="home-body">
        <div className="presentation">
          <div className="text-Presentation">
            <h1>
              ¿Buscando horarios para el cine? Bienvenido al mejor sitio de
              recopilacion de horarios de cines
            </h1>
          </div>
          <Button
            label="Ver Horarios de Carteleras"
            className="p-button-rounded"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
