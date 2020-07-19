import React from "react";
import "./Input.css";
const Input = (props) => (
  <input
    type="text"
    value={props.input}
    className="Input"
    onChange={props.handleInput}
  />
);

export default Input;
