import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";

const AddTodoList = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const addTodoHandler = (e) => {
    e.preventDefault();
    dispatch(addTodo(input));
    setInput("");
  };

  return (
    <div>
      <form onSubmit={addTodoHandler}>
        <input
          type="text"
          placeholder="Enter the todo"
          value = {input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
        <button type="submit">Add to do</button>
      </form>
    </div>
  );
};

export default AddTodoList;
