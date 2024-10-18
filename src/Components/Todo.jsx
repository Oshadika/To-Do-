import React, { useEffect, useRef, useState } from "react";
import "./css/todo.css";
import TodoItems from "./TodoItems";
let count = 0;
const Todo = () => {
  const [todos, setTodos] = useState([]);
  const todoRef = useRef(null);

  const addTodo = () => {
    setTodos([
      ...todos,
      { id: count++, todo_text: todoRef.current.value, display: false },
    ]);

    todoRef.current.value = "";
    localStorage.setItem("todo_count", count);
  };

  useEffect(() => {
    setTodos(JSON.parse(localStorage.getItem("todos")));
    count = localStorage.getItem("todo_count");
  }, []);

  useEffect(() => {
    setTimeout(() => {
      console.log(todos);
      localStorage.setItem("todos", JSON.stringify(todos));
    }, 1000);
  }, [todos]);

  const deleteData = (id) => {
    const del = todos.filter((todo) => todo.id !== id);
    setTodos(del);
  };

  const toggle = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, display: !todo.display } : todo
      )
    );

    console.log(todos);
  };

  return (
    <div className="todo">
      <div className="header">Todo List</div>
      <div className="add-todo">
        <input type="text" className="input-todo" id="" ref={todoRef} />
        <button className="btn-add" onClick={addTodo}>
          Add
        </button>
      </div>

      <div className="todo-list">
        {todos.map((todo, index) => {
          return (
            <TodoItems
              key={index}
              id={todo.id}
              todo_text={todo.todo_text}
              display={todo.display}
              setTodos={setTodos}
              deleteData={deleteData}
              toggle={toggle}
            ></TodoItems>
          );
        })}
      </div>
    </div>
  );
};

export default Todo;
