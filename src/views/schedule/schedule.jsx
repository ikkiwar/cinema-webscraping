import React, { useState, useEffect } from "react";
import Menu from "../../components/menu/menu";
import "../home/home.css";
import Loader from "../../components/loader/loader";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";

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
          <div>
            <DataTable value={[]} emptyMessage="No se encontraron Horarios">
              <Column field="name" header="Name"></Column>
              <Column field="size" header="Size"></Column>
              <Column field="type" header="Type"></Column>
            </DataTable>
          </div>
        )}
      </div>
    </div>
  );
}
