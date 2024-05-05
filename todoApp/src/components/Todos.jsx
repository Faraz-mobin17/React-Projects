import React from "react";

function Todos({ id, todo, deleteTodo, updateTodo }) {
  return (
    <div key={id}>
      <ul>
        <li>{todo}</li>
        <button onClick={() => deleteTodo(id)}>Delete</button>
        <button onClick={() => updateTodo(id, todo)}>Update</button>
      </ul>
    </div>
  );
}

export default Todos;
