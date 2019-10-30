import React from "react";
import classes from "./Gallery.css";
const Items = props => {
  let container = [];
  for (let i = 0; i < props.itemsCount; i++) {
    container.push(
      <div className={classes.Items} key={i}>
        Item{i}
      </div>
    );
  }
  return [...container];
};
export default Items;
