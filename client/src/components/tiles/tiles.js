import React from "react";
import "./style.css";

function Tiles(props) {
  return (
    <a href={props.url}>
      <div className="home-tile">
        <img
          className="tile-image"
          alt={props.name}
          src={require("../../../public/images/" + props.image)}
        />
        <div className="overlay">{props.name}</div>
      </div>
    </a>
  );
}

export default Tiles;
