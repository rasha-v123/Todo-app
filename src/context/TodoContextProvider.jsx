import React, { useContext, useReducer } from "react";
import TodoContext from "./TodoContext";

const initialState = [];

const todoReducer = (state, action) => {
  switch (action.type) {
    case "Add-todo":
      return [
        ...state,
        { ...action.payload, id: Math.floor(Math.random() * 10000) },
      ];
    case "Toggle-todo":
      return state.map((todo) =>
        todo.id === action.payload
          ? { ...todo, complete: !todo.complete }
          : todo
      );

    case "Delete-todo":
      return state.filter((todo) => todo.id !== action.payload);

    default:
      return state;
  }
};

const TodoContextProvider = ({ children }) => {
  const [todos, dispatch] = useReducer(todoReducer, initialState);

  const addTodo = (name) => {
    dispatch({
      type: "Add-todo",
      payload: {
        name,
        complete: false,
      },
    });
  };

  const toggleTodo = (id) => {
    dispatch({
      type: "Toggle-todo",
      payload: id,
    });
  };

  const deleteTodo = (id) => {
    dispatch({
      type: "Delete-todo",
      payload: id,
    });
  };

  return (
    <div>
      <TodoContext.Provider value={{ todos, addTodo, toggleTodo, deleteTodo }}>
        {children}
      </TodoContext.Provider>
    </div>
  );
};

export default TodoContextProvider;
