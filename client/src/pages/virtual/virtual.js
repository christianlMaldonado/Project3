import React from "react";
import "./style.css";
import Chat from "../../components/chat/index";

function Virtual() {
  return (
    <>
      <div className="title">Classroom</div>
      <div className="virtual">
        {" "}
        <Chat />
      </div>
    </>
  );
}

export default Virtual;
