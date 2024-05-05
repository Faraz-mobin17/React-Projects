import React from "react";

function UpdateTodo({ updateTodo, handleChange }) {
  return (
    <form onSubmit={updateTodo}>
      <input
        type="text"
        name="updateTodo"
        id="updateTodo"
        value={todo}
        onChange={handleChange}
      />
      <input type="submit" value="Update" />
    </form>
  );
}

export default UpdateTodo;
