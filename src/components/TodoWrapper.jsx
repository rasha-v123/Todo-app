import React from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";

const TodoWrapper = () => {
  return (
    <div className="TodoWrapper">
      <TodoForm />
      <Todo />
    </div>
  );
};

export default TodoWrapper;
