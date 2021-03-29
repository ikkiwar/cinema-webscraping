import React, { useState, useEffect, useRef } from "react";
import Menu from "../../components/menu/menu";
import "../home/home.css";
import Loader from "../../components/loader/loader";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { dummyData } from "../schedule/dummyData";
import { Button } from "primereact/button";
import xlsx from "xlsx";
import { dataFormater } from "../utils";
export default function Schedule() {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    getCurrentData();
  }, []);

  const getCurrentData = () => {
    let heads = new Headers();
    heads.append("content-type", "application/json");
    setIsLoading(true);
    fetch(`http://localhost:8000/cinepolis/peliculas`, {
      method: "GET",
      headers: heads,
    }).then((response) => {
      response.json().then((res) => {
        setData(res);
        setIsLoading(false);
      });
    });
  };

  const exportToXlsx = () => {
    let table = document.getElementById("tableData");
    let sheet = xlsx.utils.table_to_sheet(table);
    let book = xlsx.utils.book_new(sheet);
    xlsx.utils.book_append_sheet(book, sheet);
    xlsx.writeFile(book, "horario.xlsx");
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

            <div className="export-btn">
              <Button
                label="Exportar"
                icon="pi pi-file-excel"
                iconPos="right"
                onClick={exportToXlsx}
              />
            </div>
            <DataTable
              value={dataFormater(data)}
              emptyMessage="No se encontraron Horarios"
              scrollable
              scrollHeight="600px"
              id="tableData"
              rowGroupMode="rowspan"
              groupField="cinema"
            >
              <Column
                field="cinema"
                header="Cine"
                className="text-left"
              ></Column>
              <Column field="movie" header="Pelicula"></Column>
              <Column field="hour" header="Horario"></Column>
              <Column field="sala" header="Sala"></Column>
              <Column field="assistance" header="Asistencia"></Column>
            </DataTable>
          </div>
        )}
      </div>
    </div>
  );
}
