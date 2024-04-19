import React from "react";
import design from "../Style/todoitems.module.css";
const TodoItems = ({ items, todos, setTodos }) => {
  const handleDelete = (item) => {
    console.log("Delete Button Clicked For item: " + item.name);
    setTodos(
      todos.filter((todo) => {
        return todo !== item; // Return todos that are not equal to the item
      })
    );
  };

  const handleClick = (itemName) => {
    console.log("Item Clicked " + itemName);
    const newArray = todos.map((todo) => {
      if (todo.name === itemName) {
        // If the item matches, toggle the 'done' property
        return { ...todo, done: !todo.done };
      }
      return todo; // Return unchanged items
    });
    setTodos(newArray);
    console.log(todos);
  };
  const className = items.done ? design.completed : "";

  return (
    <div className={design.todoitem_container}>
      <div className={className} onClick={() => handleClick(items.name)}>{items.name}</div>
      <span>
        <button onClick={() => handleDelete(items)}>X</button>
      </span>
    </div>
  );
};

export default TodoItems;
