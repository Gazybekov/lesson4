import React, { useEffect, useState } from "react";
import "./index.css";
import TodoList from "./components/TodoList";
const App = () => {
  const [todos, setTodos] = useState([]);
  const [todoTitle, setTodoTitle] = useState("");

  useEffect(() => {
    const data = localStorage.getItem("todos") || [];
    setTodos(JSON.parse(data));
  }, []);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  //! UseEffect сработает 1 раз при рождении компонента
  // useEffect(() => {
  //   console.log("hello");
  // }, []);
  //! useEffect будет работать при любом изменении в нашем компоненте
  // useEffect(() => {
  //   console.log("hello");
  // });
  // useEffect(() => {
  //   console.log("bye");
  // }, [todos]);
  const addTodo = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      {
        id: Date.now(),
        title: todoTitle,
      },
    ]);
    setTodoTitle("");
  };
  return (
    <div>
      <div className="container">
        <h1>Todo app</h1>
        <div className="input-field">
          <form onSubmit={addTodo}>
            <input
              type="text"
              value={todoTitle}
              onChange={(e) => setTodoTitle(e.target.value)}
            />
            <label>TodoName</label>
          </form>
        </div>

        <TodoList todos={todos} />
      </div>
    </div>
  );
};

export default App;
