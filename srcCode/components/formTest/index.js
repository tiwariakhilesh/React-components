import React, { Component } from "react";
import InputTest from "./inputTest";

const validationRules = () => {
  return null;
};
class FormTest extends Component {
  state = {
    email: "",
    password: "",
    selectedOption: "",
    errors: {},
    touched: {
      email: false,
      password: false
    }
  };

  onChangeHandler = e => {
    const { name, type, value } = e.target;
    this.setState({
      [name]: value,
      errors: {
        [name]: validationRules(e.target)
      },
      touched: {
        ...this.state.touched,
        [name]: value
      }
    });
    console.log(name, type, value);
  };
  render() {
    return (
      <div className="form" style={{ width: "500px", margin: "0 auto" }}>
        <InputTest
          name="email"
          value={this.state.email}
          placeholder="Please Enter Your Mail"
          type="email"
          onChange={this.onChangeHandler}
        />
        <InputTest
          name="city"
          value={this.state.city}
          placeholder="Please Enter Your city"
          type="select"
          onChange={this.onChangeHandler}
          options={["Delhi", "Mumbai", "Chennai", "Kolkata"]}
        />
      </div>
    );
  }
}
export default FormTest;
