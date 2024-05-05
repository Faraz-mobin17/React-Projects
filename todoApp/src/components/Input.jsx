import React from "react";
import PropTypes from "prop-types";

Input.propTypes = {
  todo: PropTypes.string.isRequired,
  addTodo: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
};
function Input({ todo, addTodo, handleChange }) {
  return (
    <form onSubmit={addTodo}>
      <label htmlFor="addTodo">Enter Todo</label>
      <input
        type="text"
        name="addTodo"
        id="addTodo"
        value={todo}
        onChange={handleChange}
      />
      <button type="submit">Add Todo</button>
    </form>
  );
}

export default Input;
