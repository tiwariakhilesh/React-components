import React, { Component, Suspense } from "react";
import { Link, Route, Switch } from "react-router-dom";
import Users from "./containers/Users";
import asyncComponent from "./hoc/asyncComponent";
import withProps from "./hoc/withProps";
import Gallery from "./components/Gallery/Gallery";
import classes from "./index.css";
import SideDrawer from "./components/sidedrawer/sidedrawer";
const AsyncPizza = React.lazy(() => {
  return import("./containers/Pizza.js");
});
// const AsyncPizza = asyncComponent(() => {
//   return import("./containers/Pizza.js");
// });
const routes = (
  <div>
    <Route path="/" exact component={Users} />
    <Switch>
      <Route
        path="/pizza"
        render={() => (
          <Suspense fallback={<div>Loading...</div>}>
            <AsyncPizza />
          </Suspense>
        )}
      />
      <Route path="/gallery" component={Gallery} />
    </Switch>
    {/* <Route path="/pizza" component={AsyncPizza} /> */}
  </div>
);

class App extends Component {
  state = {
    items: [
      { to: "/", text: "Akki" },
      { to: "/pizza", text: "Pizza" },
      { to: "gallery", text: "Gallery" }
    ]
  };
  render() {
    return (
      <div className={classes.App}>
        {/* <div>
          <Link to="/">Users</Link> | <Link to="/pizza">Pizza</Link> |{" "}
          <Link to="/gallery">Gallery</Link>
        </div> */}
        <SideDrawer items={this.state.items} />
        <div className={classes.container}>{routes}</div>
      </div>
    );
  }
}

export default withProps(App, "App");
