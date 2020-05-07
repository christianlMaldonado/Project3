import React, { useState } from "react";
import "./style.css";

function getVideo() {
  const video = document.getElementsByClassName(".player");
  navigator.mediaDevices
    .getUserMedia({ video: true, audio: true })
    .then((localMediaStream) => {
      console.log(localMediaStream);
      video.srcObject = localMediaStream;
      video.play();
    })
    .catch((err) => console.log("nOOOOOOOooo!", err));
}

export default getVideo;
