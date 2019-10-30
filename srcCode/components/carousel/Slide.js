import React from "react";
import classes from "./carousel.css";
const Slide = props => {
  let classname = [
    classes.slide,
    props.id === props.currentIndex ? "visible" : null
  ];
  const style = {
    backgroundImage: `url(${props.image})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "50% 60%"
  };
  return <div className={classname.join(" ")} style={style} />;
};
export default Slide;
