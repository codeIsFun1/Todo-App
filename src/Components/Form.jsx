import React, { useState } from "react";
import design from "../Style/form.module.css";
const Form = ({ todos, setTodos }) => {
  // const [todo, setTodo] = useState("");
  const [todo, setTodo] = useState({ name: "", done: false });

  const getTodo = (e) => {
    setTodo({ name: e.target.value, done: false });
  };
  const handleAdd = (e) => {
    e.preventDefault();
    if (!todo.name) {
      alert("field should not be empty");
    } else {
      setTodos([...todos, todo]);
      setTodo({ name: e.target.value, done: false });
    }
  };
  return (
    <form className={design.form_container}>
      <input type="text" name="" id="" value={todo.name} onChange={getTodo} />
      <button type="submit" onClick={handleAdd}>
        Add
      </button>
    </form>
  );
};

export default Form;
