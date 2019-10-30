import React, { useState, useEffect } from "react";
import axios from "axios";
import { Route } from "react-router-dom";
import Pizza from "../../containers/Pizza";
import WithProps from "../../hoc/withProps";

const Todo = props => {
  const [todoValue, setTodoName] = useState("");
  const [todoList, setTodoList] = useState([]);
  const onchangeHandler = e => {
    setTodoName(e.target.value);
  };
  const setTodoListHandler = () => {
    setTodoList(todoList.concat({ name: todoValue }));
    props.listInfo(todoList);
  };
  useEffect(() => {
    axios
      .get("https://reacthooks-4b960.firebaseio.com/userList.json")
      .then(res => {
        console.log(res.data);
        setTodoList(todoList.concat(res.data));
      })
      .catch(err => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <input onChange={onchangeHandler} value={todoValue} />
      <button onClick={setTodoListHandler}>Add Item</button>
      <ul>
        {todoList.map((el, i) => {
          return <li key={i}>{el.name}</li>;
        })}
      </ul>
    </div>
  );
};
export default Todo;
