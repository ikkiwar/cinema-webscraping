import React from "react";
import Load from "../../assets/images/tenor.gif";
import "../loader/loader.css";
import Count from "../../assets/images/countdown.gif";

export default function Loader() {
  return (
    <div className="loader">
      <img src={Count} />
    </div>
  );
}
