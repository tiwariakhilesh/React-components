import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import classes from "./carousel.css";
const LeftButton = props => {
  return (
    <div className={classes.LeftButton} onClick={props.click}>
      <FontAwesomeIcon icon={faArrowLeft} />
    </div>
  );
};
export default LeftButton;
