import React, { useState, useEffect } from "react";
import Menu from "../../components/menu/menu";
import "../home/home.css";
import Loader from "../../components/loader/loader";
import { Column } from "primereact/column";
import { TreeTable } from "primereact/treetable";
import { dummyData } from "../schedule/dummyData";
import { Button } from "primereact/button";
import { Calendar } from "primereact/calendar";

const Historico = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [dateSelected, setDateSelected] = useState(new Date());
  const [data, setData] = useState([]);

  useEffect(() => {
    getHistoryData(dateSelected);
  }, []);

  const getHistoryData = (date) => {
    console.log(date);
    let heads = new Headers();
    heads.append("content-type", "application/json");
    setIsLoading(true);
    fetch(`https://pokeapi.co/api/v2/pokemon/ditto`, {
      method: "GET",
      headers: heads,
    }).then((response) => {
      response.json().then((res) => {
        setData(res);
        setIsLoading(false);
      });
    });
  };

  return (
    <div className="home-style">
      <Menu />
      <div className="home-body">
        {isLoading ? (
          <Loader />
        ) : (
          <div className="schedule-table">
            <div className="calendar-format">
              <Calendar
                value={dateSelected}
                onChange={(e) => {
                  setDateSelected(e.value);
                  getHistoryData(e.value);
                }}
                showIcon
                dateFormat="dd/mm/yy"
              />
            </div>

            <div className="export-btn">
              <Button label="Exportar" icon="pi pi-table" iconPos="right" />
            </div>
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
};

export default Historico;
