import React from "react";
import { Link } from "react-router-dom";
import classes from "./ListItems.css";

const ListItems = props => {
  return (
    <li className={classes.ListItems}>
      <Link to={props.to}>{props.text}</Link>
    </li>
  );
};
export default ListItems;
