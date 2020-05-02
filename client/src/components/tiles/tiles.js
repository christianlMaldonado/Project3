import React from "react";
import "./style.css";

function Tiles(props) {
  return (
    <a href={props.url}>
      <div className="home-tile">
        <p className="header-tile">{props.name}</p>
        <div className="tile-container">Data Here?</div>
      </div>
    </a>
  );
}

export default Tiles;
