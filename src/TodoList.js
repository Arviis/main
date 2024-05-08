import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, toggleComplete, deleteTodo, updateDueDate }) => {
  return (
    <div>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          toggleComplete={toggleComplete}
          deleteTodo={deleteTodo}
          updateDueDate={updateDueDate} // Ensure updateDueDate is passed down
        />
      ))}
    </div>
  );
};

export default TodoList;
