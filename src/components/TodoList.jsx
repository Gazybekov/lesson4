import React from "react";
import TodoItem from "./TodoItem";
import "../index.css";
const TodoList = ({ todos }) => {
  return (
    <div>
      <ul>
        {todos.map((elem) => (
          <TodoItem key={elem.id} {...elem} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
