import React from "react";
import "../index.css";
const TodoItem = ({ title }) => {
  return (
    <div>
      <li className="todo">
        <label>
          <input type="checkbox" />
          <span>{title}</span>
          <i className="material-icons red-text">delete</i>
        </label>
      </li>
    </div>
  );
};

export default TodoItem;
