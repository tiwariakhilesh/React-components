import React, { Component } from "react";
import classes from "./carousel.css";
class Slide extends Component {
  render() {
    const style = {
      backgroundImage: `url(${this.props.image})`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "50% 60%"
    };
    return <div className={classes.slide} style={style} />;
  }
}
// const Slide = props => {
//   const style = {
//     backgroundImage: `url(${props.image})`,
//     backgroundSize: "cover",
//     backgroundRepeat: "no-repeat",
//     backgroundPosition: "50% 60%"
//   };
//   return <div className={classes.slide} style={style} />;
// };
export default Slide;
