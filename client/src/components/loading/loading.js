import React from "react";
import "./style.css";

function Loading() {
  return (
    <div className="loading-screen">
      {" "}
      <img
        alt="logo"
        className="logo-loading"
        src={process.env.PUBLIC_URL + "/images/ramLogo.png"}
      ></img>{" "}
      <br></br>
      LOADING
    </div>
  );
}

export default Loading;
