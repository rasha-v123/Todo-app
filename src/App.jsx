import { useState } from "react";
import "./App.css";
import TodoWrapper from "./components/TodoWrapper";
import TodoContextProvider from "./context/TodoContextProvider";
function App() {
  return (
    <div className="App">
      <h1>Todo List</h1>
      <TodoContextProvider>
        <TodoWrapper />
      </TodoContextProvider>
    </div>
  );
}

export default App;
