import React, { useState, useEffect } from "react";
import Menu from "../../components/menu/menu";
import "../home/home.css";
import Loader from "../../components/loader/loader";
import { Column } from "primereact/column";
import { TreeTable } from "primereact/treetable";
import { dummyData } from "../schedule/dummyData";
export default function Schedule() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    redirect();
  }, []);

  const redirect = () => {
    setTimeout(function () {
      setIsLoading(false);
    }, 3000);
  };

  return (
    <div className="home-style">
      <Menu />
      <div className="home-body">
        {isLoading ? (
          <Loader />
        ) : (
          <div className="schedule-table">
            <p>Horarios Disponibles</p>
            <TreeTable
              value={dummyData}
              emptyMessage="No se encontraron Horarios"
              scrollable
              scrollHeight="600px"
            >
              <Column
                field="cine"
                header="Cine"
                className="text-left"
                expander
              ></Column>
              <Column field="pelicula" header="Pelicula"></Column>
              <Column field="sala" header="Sala"></Column>
              <Column field="horario" header="Horario"></Column>
            </TreeTable>
          </div>
        )}
      </div>
    </div>
  );
}
