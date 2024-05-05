import { useState, useEffect } from "react";

function getLocalItems() {
  let list = localStorage.getItem("lists");
  if (list) {
    return JSON.parse(localStorage.getItem("lists"));
  }
  return [];
}

function App() {
  const [todos, setTodos] = useState(getLocalItems());
  const [newItem, setNewItem] = useState("");
  const [toggleSubmit, setToggleSubmit] = useState(true);
  const [editItem, setEditItem] = useState(null);
  // const [item, setItem] = useState(getLocalItems());

  useEffect(() => {
    localStorage.setItem("lists", JSON.stringify(todos));
  }, [todos]);

  const removeAll = () => setTodos([]);

  function handleSubmit(e) {
    e.preventDefault();
    if (!newItem) {
      alert("Please fill the data");
      return;
    } else if (newItem && !toggleSubmit) {
      setTodos(
        todos.map((el) => {
          if (el.id === editItem) {
            return { ...el, title: newItem };
          }
          return el;
        })
      );
      setToggleSubmit(true);
      setNewItem("");
      setEditItem(null);
    } else {
      const newTask = {
        id: crypto.randomUUID(),
        title: newItem,
        completed: false,
      };
      setTodos((prevState) => {
        return [...prevState, newTask];
      });
      console.log(todos);
      setNewItem("");
    }
  }

  function toggleTodo(id, completed) {
    setTodos((prevState) => {
      return prevState.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed };
        }
        return todo;
      });
    });
  }

  function deleteTodo(id) {
    setTodos((prevState) => prevState.filter((todo) => todo.id !== id));
  }

  function editTodo(id) {
    const todo = todos.find((todo) => todo.id === id); // got the data
    console.log(todo);
    setToggleSubmit(false);
    setNewItem(todo.title);
    setEditItem(id);
  }

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="item" className="label-head">
            Add new Item
          </label>
          <input
            type="text"
            name="item"
            id="item"
            placeholder="Enter task..."
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
          />
          {toggleSubmit ? (
            <button className="btn-add">Add Item</button>
          ) : (
            <button className="btn-edit">Update Item</button>
          )}
        </form>
        <h1 className="header">Todo List</h1>
        <ul className="list">
          {todos.map((todo) => {
            return (
              <li key={todo.id}>
                <div className="checkbox-container">
                  <input
                    type="checkbox"
                    name="checkbox"
                    id="checkbox"
                    checked={todo.completed}
                    onChange={(e) => toggleTodo(todo.id, e.target.checked)}
                  />
                </div>
                <label className="todo-title" htmlFor="checkbox">
                  {todo.title}
                </label>
                <button className="btn-edit" onClick={() => editTodo(todo.id)}>
                  Edit
                </button>
                <button
                  className="btn-delete"
                  onClick={() => deleteTodo(todo.id)}
                >
                  Delete
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default App;
