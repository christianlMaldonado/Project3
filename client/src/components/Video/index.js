import React, { useEffect, useState, useRef } from "react";
import io from "socket.io-client";
import Peer from "simple-peer";
import styled from "styled-components";
import "./style.css";

const Row = styled.div`
  display: flex;
  width: 100%;
`;

function App() {
  const [yourID, setYourID] = useState("");
  const [users, setUsers] = useState({});
  const [stream, setStream] = useState();
  const [receivingCall, setReceivingCall] = useState(false);
  const [caller, setCaller] = useState("");
  const [callerSignal, setCallerSignal] = useState();
  const [callAccepted, setCallAccepted] = useState(false);

  const userVideo = useRef();
  const partnerVideo = useRef();
  const socket = useRef();

  useEffect(() => {
    socket.current = io.connect("/");
    navigator.mediaDevices.getUserMedia({ video: true, audio: true }).then((stream) => {
      setStream(stream);
      if (userVideo.current) {
        userVideo.current.srcObject = stream;
      }
    });

    socket.current.on("yourID", (id) => {
      setYourID(id);
    });
    socket.current.on("allUsers", (users) => {
      setUsers(users);
    });

    socket.current.on("hey", (data) => {
      setReceivingCall(true);
      setCaller(data.from);
      setCallerSignal(data.signal);
    });
  }, []);

  function callPeer(id) {
    const peer = new Peer({
      initiator: true,
      trickle: false,
      stream: stream,
    });

    peer.on("signal", (data) => {
      socket.current.emit("callUser", {
        userToCall: id,
        signalData: data,
        from: yourID,
      });
    });

    peer.on("stream", (stream) => {
      if (partnerVideo.current) {
        partnerVideo.current.srcObject = stream;
      }
    });

    socket.current.on("callAccepted", (signal) => {
      setCallAccepted(true);
      peer.signal(signal);
    });
  }

  function acceptCall() {
    setCallAccepted(true);
    const peer = new Peer({
      initiator: false,
      trickle: false,
      stream: stream,
    });
    peer.on("signal", (data) => {
      socket.current.emit("acceptCall", { signal: data, to: caller });
    });

    peer.on("stream", (stream) => {
      partnerVideo.current.srcObject = stream;
    });

    peer.signal(callerSignal);
  }

  function endCall() {
    setReceivingCall(false);
    setCallAccepted(false);
  }

  let UserVideo;
  if (stream) {
    UserVideo = <video id="uservideo" playsInline muted ref={userVideo} autoPlay />;
  }

  let PartnerVideo, HangUp, hide;
  if (callAccepted) {
    hide = "hideButtons";
    PartnerVideo = <video id="partnervideo" playsInline ref={partnerVideo} autoPlay />;
    HangUp = (
      <button className="hangup" onClick={endCall}>
        Hang Up
      </button>
    );
  }

  let incomingCall;
  if (receivingCall) {
    incomingCall = (
      <div>
        {/* removed caller below */}
        <span id="incoming-text" className={hide}>
          {}You have an incoming call!{" "}
        </span>
        <button onClick={acceptCall} id="accept" className={hide}>
          Accept
        </button>
      </div>
    );
  }

  return (
    <div className="videoContainer">
      <Row>
        {UserVideo}
        {PartnerVideo}
      </Row>
      <Row>
        {Object.keys(users).map((key) => {
          if (key === yourID) {
            return null;
          }
          return (
            <button
              key={Math.floor(Math.random() * 100000)}
              onClick={() => callPeer(key)}
              id="call"
              className={hide}
            >
              Call {}
              {/* removed key from above, need user name */}
            </button>
          );
        })}
      </Row>
      <Row className="incoming-position">
        {incomingCall} {HangUp}
      </Row>
    </div>
  );
}

export default App;
