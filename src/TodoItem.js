import React from "react";

const TodoItem = ({ todo, toggleComplete, deleteTodo, updateDueDate }) => {
  const handleDueDateChange = (e) => {
    updateDueDate(todo.id, e.target.value);
  };

  return (
    <div className="todo-item">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleComplete(todo.id)}
      />
      <input
        type="text"
        value={todo.text}
        onChange={(e) => console.log("Update todo text")}
      />
      <input
        type="date"
        value={todo.dueDate}
        onChange={handleDueDateChange}
      />
      <button onClick={() => deleteTodo(todo.id)}>Delete</button>
    </div>
  );
};

export default TodoItem;
