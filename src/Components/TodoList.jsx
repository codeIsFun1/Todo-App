import React from "react";
import TodoItems from "./TodoItems";
import design from "../Style/todolist.module.css";
const TodoList = ({ todos, setTodos }) => {
  const sortedTodos = todos
    .slice()
    .sort((a, b) => Number(a.done) - Number(b.done));

  return (
    <div className={design.todolistContainer}>
      {sortedTodos.map((items) => (
        <TodoItems
          key={items.name}
          items={items}
          todos={todos}
          setTodos={setTodos}
        />
      ))}
    </div>
  );
};

export default TodoList;
