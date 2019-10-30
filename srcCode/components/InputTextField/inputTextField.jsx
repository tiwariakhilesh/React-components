import React from "react";

const InputTextField = props => {
  console.log(props)
  const renderInput = () => {
    switch (props.type) {
      case "select":
        return (
          <select
            onChange={props.onchange}
            name={props.name}
            required={props.required}
            value={props.value}
          >
            {props.options &&
              props.options.map((el, i) => {
                return (
                  <option key={i} value={el}>
                    {el}
                  </option>
                );
              })}
          </select>
        );
      case "radio":
        return (
          <div className="radioButtons">
            <input
              type="radio"
              onChange={props.onchange}
              value={props.value}
              checked={props.checked}
            />
            <span>{props.value}</span>
          </div>
        );
      case "textarea":
        return (
          <textarea
            value={props.value}
            rows={props.rows || 3}
            cols={props.cols || 5}
            onChange={props.onchange}
            name={props.name}
            placeholder={props.placeholder}
            required={props.required}
          >
            {props.value}
          </textarea>
        );
      case "email":
        return (
          <input
            type="email"
            onChange={props.onchange}
            value={props.value}
            name={props.name}
            placeholder={props.placeholder}
            required={props.required}
          />
        );
      case "password":
        return (
          <input
            type="password"
            onChange={props.onchange}
            value={props.value}
            name={props.name}
            placeholder={props.placeholder}
            required={props.required}
          />
        );
      default:
        return (
          <input
            type="text"
            onChange={props.onchange}
            value={props.value}
            name={props.name}
            placeholder={props.placeholder}
            required={props.required}
          />
        );
    }
  };
  return (
    <div className="form-group">
      {props.type !== "radio" ? (
        <label htmlFor={props.name}>{props.label}</label>
      ) : null}
      {renderInput()}
    </div>
  );
};
export default InputTextField;
