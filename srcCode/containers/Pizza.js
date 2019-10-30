import React, { Component } from "react";
import withProps from "../hoc/withProps";
import PizzaImage from "../components/PizzaImage/PizzaImage";

class Pizza extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <React.Fragment>
        <h1>The Pizza</h1>
        <PizzaImage />
      </React.Fragment>
    );
  }
}

export default withProps(Pizza, "PizzaContainer");
