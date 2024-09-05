import React, { useContext } from "react";
import { Check, Bomb, FilePenLine } from "lucide-react";
import TodoContext from "../context/TodoContext";

const Todo = () => {
  const { todos, toggleTodo, deleteTodo } = useContext(TodoContext);
  return (
    <>
      {todos.map((todo) => (
        <div key={todo.id} className="Todo">
          <h4
            style={{ textDecoration: todo.complete ? "line-through" : "none" }}
          >
            {todo.name}
          </h4>
          <div className="Todo-icons">
            <Check onClick={() => toggleTodo(todo.id)} />
            <Bomb onClick={() => deleteTodo(todo.id)} />
          </div>
        </div>
      ))}
    </>
  );
};

export default Todo;
