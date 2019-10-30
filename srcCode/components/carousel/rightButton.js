import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import classes from "./carousel.css";
const RightButton = props => {
  return (
    <div className={classes.RightButton} onClick={props.click}>
      <FontAwesomeIcon icon={faArrowRight} />
    </div>
  );
};
export default RightButton;
