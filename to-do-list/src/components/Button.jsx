import React from "react";
import "./Button.css";
const Button = (props) => (
  <button onClick={props.handleClick} className="Button">
    {props.children}
  </button>
);

export default Button;
