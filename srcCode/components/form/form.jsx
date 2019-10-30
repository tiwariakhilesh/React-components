import React, { Component } from "react";
import InputTextField from "../InputTextField/inputTextField";
import { validationRules } from "../../utility/validationRules";
import classes from "./form.css";
class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      city: "",
      selectedOption: "Male",
      errors: {},
      touched: {
        email: false,
        password: false
      }
    };
  }

  onchangeHandler = e => {
    const { type, name, value } = e.target;
    if (type === "radio") {
      this.setState({
        selectedOption: value
      });
      return;
    }
    this.setState(
      {
        [name]: value,
        errors: {
          ...this.state.errors,
          [name]: validationRules(e.target)
        },
        touched: {
          ...this.state.touched,
          [name]: true
        }
      },
      () => {
        console.log(this.state.errors);
      }
    );
  };
  onSubmit = e => {
    e.preventDefault();
    const { touched } = this.state;
    let valid = true;
    for (let el in touched) {
      valid = valid && touched[el];
    }
    if (valid) {
      const dataObj = {
        email: this.state.email,
        password: this.state.password,
        city: this.state.city,
        gender: this.state.selectedOption
      };
      console.log(dataObj);
    } else {
      alert("Fill mandatory fields");
    }
  };
  render() {
    const cityOptions = ["New Delhi", "Mumbai", "jaipur"];
    const { email, password } = this.state.errors;
    return (
      <form className={classes.formContainer}>
        <InputTextField
          type="email"
          value={this.state.email}
          onchange={this.onchangeHandler}
          name="email"
          placeholder="Enter Your email"
          label="Email"
          required
        />
        {email && email.error && <p>{email.error}</p>}
        {email && email.required && <p>{email.required}</p>}
        <InputTextField
          type="password"
          value={this.state.password}
          onchange={this.onchangeHandler}
          name="password"
          placeholder="Enter Your password"
          label="Password"
          required
        />
        {password && password.error && <p>{password.error}</p>}
        {password && password.required && <p>{password.required}</p>}
        <InputTextField
          type="select"
          value={this.state.city}
          onchange={this.onchangeHandler}
          name="city"
          placeholder="select city"
          label="City"
          options={cityOptions}
        />
        <label>Gender</label>
        <InputTextField
          type="radio"
          value="Male"
          onchange={this.onchangeHandler}
          checked={this.state.selectedOption === "Male"}
        />
        <InputTextField
          type="radio"
          value="Female"
          onchange={this.onchangeHandler}
          checked={this.state.selectedOption === "Female"}
        />
        <button type="submit" onClick={this.onSubmit}>
          Submit
        </button>
      </form>
    );
  }
}
export default Form;
