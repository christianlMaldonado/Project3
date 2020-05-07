import React from "react";
import "./style.css";
import Chat from "../../components/chat/index";
import WebRTC from "../../components/WebRTC/WebRTC";

function Virtual() {
  WebRTC();
  return (
    <>
      <div className="title">Classroom</div>
      <div className="virtual">
        <video className="player" autoPlay></video>
      </div>
      <Chat />
    </>
  );
}

export default Virtual;
