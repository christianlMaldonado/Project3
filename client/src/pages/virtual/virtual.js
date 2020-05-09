import React from "react";
import "./style.css";
import Chat from "../../components/chat/index";
import Video from "../../components/Video";

function Virtual() {
  return (
    <>
      <div className="title">
        {" "}
        <img
          alt="logo"
          className="logo-size"
          src={process.env.PUBLIC_URL + "/images/ramLogo.png"}
        ></img>{" "}
        <span className="top-title-create">Virtual</span>
      </div>
      <div className="virtual">
        <Video />
        <Chat />
      </div>
    </>
  );
}

export default Virtual;
