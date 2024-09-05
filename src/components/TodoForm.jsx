import React, { useState, useContext, useReducer } from "react";
import TodoContext from "../context/TodoContext";

const TodoForm = () => {
  const { addTodo } = useContext(TodoContext);

  const [formText, setFormText] = useState({
    name: "",
    complete: false,
    id: Math.floor(Math.random() * 100000),
  });

  const handleChange = (e) => {
    setFormText({ ...formText, name: e.target.value });
    console.log(formText);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(formText.name);
    console.log(formText);
  };

  return (
    <div className="TodoForm">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={formText.name}
          className="todo-input"
          onChange={handleChange}
        />
        <button type="submit" className="todo-btn">
          Add Todo
        </button>
      </form>
    </div>
  );
};

export default TodoForm;
