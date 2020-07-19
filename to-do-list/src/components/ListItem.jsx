import React from "react";
import "./ListItem.css";
const ListItem = (props) => (
  <li className="ListItem">
    {props.children}
    <button onClick={() => props.handleClick(props.children)}>X</button>
  </li>
);

export default ListItem;
