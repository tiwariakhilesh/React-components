import React from "react";

const InputTest = ({ name, value, type, options, onChange }) => {
  const renderInput = () => {
    switch (type) {
      case "select":
        return (
          <select name={name} value={value} onChange={onChange}>
            {options &&
              options.map((el, i) => {
                return (
                  <option value={el} key={`${el}_${i}`}>
                    {el}
                  </option>
                );
              })}
          </select>
        );
      case "password":
        return (
          <input
            type="password"
            name={name}
            value={value}
            onChange={onChange}
          />
        );
      default:
        return (
          <input type="text" name={name} value={value} onChange={onChange} />
        );
    }
  };
  return (
    <div className="inputField">
      <label htmlFor={name}>{name}</label>
      {renderInput()}
    </div>
  );
};
export default InputTest;
