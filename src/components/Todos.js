import React from "react";
import { useSelector } from "react-redux";
import { removeTodo,updateTodo } from "../features/todo/todoSlice";
import { useDispatch } from "react-redux";

function Todos() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleDelete = (e,id) => {
    e.preventDefault();
    dispatch(removeTodo(id));
  }

  const handleUpdate = (e,id) => {
    e.preventDefault();
    const text = "Hey Updated!";
    dispatch(updateTodo({id,text}));
  }

  return (
    <div>
      <h2>To do's : </h2>
      <ul className="list-none">
        {todos.map((todo) => {
          return (
            <li key={todo.id}>
              <div>{todo.text}</div>
              <button onClick={(e) => handleDelete(e,todo.id)}>Delete</button>
              <br></br>
              <button onClick={(e) => handleUpdate(e,todo.id)}>Update</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Todos;
