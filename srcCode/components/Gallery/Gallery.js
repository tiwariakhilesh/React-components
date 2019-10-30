import React, { Component } from "react";
import Items from "./Items";
import Practice from "../practice/practice";
import Table from "../table/table";
class Gallery extends Component {
  render() {
    const itemsCount = 6;
    return (
      <div className="Gallery">
        <Items itemsCount={itemsCount} />
      </div>
    );
  }
}
export default Gallery;
