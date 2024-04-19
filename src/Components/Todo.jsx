import React, { useState } from "react";
import design from "../Style/todo.module.css";
import Form from "./Form";
import TodoList from "./TodoList";
import Footer from "./Footer";

const Todo = () => {
  const [todos, setTodos] = useState([]);

  // Compute the number of completed todos
  const completedTodos = todos.filter((todo) => todo.done).length;
  const totalTodos = todos.length;
  return (
    <div className={design.todo_container}>
      <Form todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
      <Footer completedTodos={completedTodos} totalTodos={totalTodos} />
    </div>
  );
};

export default Todo;
