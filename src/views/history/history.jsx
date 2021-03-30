import React, { useState, useEffect } from "react";
import Menu from "../../components/menu/menu";
import "../home/home.css";
import Loader from "../../components/loader/loader";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { dummyData } from "../schedule/dummyData";
import { Button } from "primereact/button";
import { Calendar } from "primereact/calendar";
import { dataFormater, ymdFormat } from "../utils";
import xlsx from "xlsx";

const Historico = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [dateSelected, setDateSelected] = useState(new Date());
  const [data, setData] = useState({});

  const exportToXlsx = () => {
    let table = document.getElementById("tableData");
    let sheet = xlsx.utils.table_to_sheet(table);
    let book = xlsx.utils.book_new(sheet);
    xlsx.utils.book_append_sheet(book, sheet);
    xlsx.writeFile(book, "horario.xlsx");
  };

  const getHistoryData = (date) => {
    console.log(ymdFormat(date));
    let heads = new Headers();
    heads.append("content-type", "application/json");
    setIsLoading(true);
    fetch(`http://localhost:8000/cinepolis/pelicula?fecha=${ymdFormat(date)}`, {
      method: "GET",
      headers: heads,
    }).then((response) => {
      response.json().then((res) => {
        setData(res);
        setIsLoading(false);
      });
    });
  };

  const headerTemplate = (data) => {
    return (
      <React.Fragment>
        <span style={{ textAlign: "right" }}>{data.sucursal}</span>
      </React.Fragment>
    );
  };
  const footerTemplate = (data) => {
    return (
      <React.Fragment>
        <td colSpan="5" style={{ textAlign: "right" }}></td>
      </React.Fragment>
    );
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
              <Button
                label="Exportar"
                icon="pi pi-file-excel"
                iconPos="right"
                onClick={exportToXlsx}
              />
            </div>
            <DataTable
              value={dataFormater(data.data)}
              emptyMessage="No se encontraron Horarios"
              scrollable
              scrollHeight="450px"
              id="tableData"
              rowGroupMode="subheader"
              groupField="sucursal"
              sortMode="single"
              sortField="sucursal"
              sortOrder={1}
              rowGroupHeaderTemplate={headerTemplate}
              rowGroupFooterTemplate={footerTemplate}
            >
              <Column
                field="sucursal"
                header="Cine"
                className="text-left"
              ></Column>
              <Column field="nombre" header="Pelicula"></Column>
              <Column field="hora" header="Horario"></Column>
              <Column field="sala" header="Sala"></Column>
              <Column field="asistencias" header="Asistencia"></Column>
            </DataTable>
          </div>
        )}
      </div>
    </div>
  );
};

export default Historico;
