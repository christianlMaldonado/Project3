import React from "react";
import "./style.css";

export function Form({ children }) {
  return <form className="form-container">{children}</form>;
}

export function Input(props) {
  return <input {...props} />;
}

export function Text(props) {
  return <textarea {...props}></textarea>;
}

export function Btn(props) {
  return <button {...props}>{props.children}</button>;
}
