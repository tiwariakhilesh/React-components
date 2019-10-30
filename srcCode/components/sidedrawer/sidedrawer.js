import React, { Component } from "react";
import ListItems from "./ListItems";
import classes from "./ListItems.css";

export default class SideDrawer extends Component {
  state = {
    items: [
      { to: "/", text: "User" },
      { to: "/pizza", text: "Pizza" },
      { to: "gallery", text: "Gallery" }
    ],
    status: false
  };
  transform = () => {
    this.setState(prevState => ({
      status: !prevState.status
    }));
  };
  render() {
    let listItem,
      transformVal = 0;
    let itemsArray = this.props.items ? this.props.items : this.state.items;
    listItem = itemsArray.map((el, i) => {
      return <ListItems to={el.to} text={el.text} key={i} />;
    });
    if (this.state.status) {
      transformVal = 0;
    } else {
      transformVal = "-100%";
    }
    return (
      <React.Fragment>
        <div
          className={classes.sideDrawer}
          style={{ transform: `translateX(${transformVal})` }}
        >
          <section className={classes.sideDrawerBody}>
            <header className={classes.header} />
            <ul className={classes.textAlign}>{listItem}</ul>
          </section>
          <button onClick={this.transform} className={classes.buttonClass}>
            click me
          </button>
        </div>
      </React.Fragment>
    );
  }
}
