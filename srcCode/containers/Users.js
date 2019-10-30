import React, { Component } from "react";
import Todo from "../components/todoList/todo";
import withProps from "../hoc/withProps";
import Pizza from "./Pizza";
import { Redirect } from "react-router-dom";
import pizzaImage from "../components/PizzaImage/PizzaImage";
import Carousel from "../components/carousel2/carouseltype2";
import Carouseltype2 from "../components/carousel/carouseltype2";
import Table from "../components/table/table";
import Form from "../components/form/form";
import FormTest from "../components/formTest";

class Users extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    auth: true,
    todoList: [],
    todoValue: ""
  };

  componentDidUpdate() {
    console.log("hi" + this.props.history);
  }
  listInfo = todoList => {
    this.setState({
      todoList: [...todoList]
    });
  };
  render() {
    return (
      <div>
        {/* {console.log(this.props.history)}
        <Carousel />
        <h1>The Users</h1>
        <Carouseltype2 />
        <Table />
        <Todo listInfo={this.listInfo} />
        <p>todo values are {this.state.todoValue}</p> */}
        <Form />
        {/* <FormTest /> */}
      </div>
    );
  }
}

export default Users;
