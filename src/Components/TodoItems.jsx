import React from "react";
import "./css/todo.css";
import check from "./assets/checked.png";
import uncheck from "./assets/unchecked.png";
const TodoItems = ({
  id,
  display,
  todo_text,
  setTodos,
  deleteData,
  toggle,
}) => {
  const displays = display ? "line-through" : " ";

  return (
    <div className="todo_items">
      <div
        className={`todo_items_contaner ${displays}`}
        onClick={() => toggle(id)}
      >
        {displays === " " ? (
          <img src={uncheck} className="uncheck" />
        ) : (
          <img src={check} className="check" />
        )}

        <div className="todo_text">{todo_text}</div>
      </div>

      <button className="btn-delete" onClick={() => deleteData(id)}>
        Delete
      </button>
    </div>
  );
};

export default TodoItems;
