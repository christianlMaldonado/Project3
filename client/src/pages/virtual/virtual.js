import React from "react";
import "./style.css";
import Chat from "../../components/chat/index";

function Virtual() {
  return (
    <>
      <div className="title">Virtual Classroom</div>
      <div className="container">
        <div className="virtual">
          <Chat />
        </div>
      </div>
    </>
  );
}

export default Virtual;
