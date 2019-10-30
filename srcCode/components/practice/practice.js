import React from "react";
let status = false;
const Practice = props => {
  const onchangeHandler = () => {
    status = !status;
    props.initFunc(status);
  };
  return <button onClick={onchangeHandler}>Click me</button>;
};
export default Practice;
