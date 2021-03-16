import React from "react";
import Load from "../../assets/images/tenor.gif";
import "../loader/loader.css";

export default function Loader() {
  return (
    <div className="loader">
      <img src={Load} />
    </div>
  );
}
