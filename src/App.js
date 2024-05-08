import React, { useState } from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import Header from "./Header";
import Footer from "./Footer";
import "./App.css";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");

  const addTodo = () => {
    if (todo !== "") {
      const newTodo = {
        id: Date.now(),
        text: todo,
        completed: false,
        dueDate: ""
      };
      setTodos([...todos, newTodo]);
      setTodo("");
    }
  };

  const deleteTodo = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  const toggleComplete = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  const updateDueDate = (id, newDueDate) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, dueDate: newDueDate } : todo
    );
    setTodos(updatedTodos);
  };

  const sortTodos = (sortBy) => {
    let sortedTodos = [...todos];
    switch (sortBy) {
      case "ID":
        sortedTodos.sort((a, b) => a.id - b.id);
        break;
      case "Completed":
        sortedTodos.sort((a, b) => (a.completed === b.completed ? 0 : a.completed ? -1 : 1));
        break;
      case "DueDate":
        sortedTodos.sort((a, b) => (a.dueDate > b.dueDate ? 1 : -1));
        break;
      default:
        break;
    }
    setTodos(sortedTodos);
  };

  return (
    <div className="App">
      <Header />
      <TodoInput todo={todo} setTodo={setTodo} addTodo={addTodo} />
      <button onClick={() => sortTodos("ID")}>Sort by ID</button>
      <button onClick={() => sortTodos("Completed")}>Sort by Completed</button>
      <button onClick={() => sortTodos("DueDate")}>Sort by Due Date</button>
      <TodoList 
        todos={todos} 
        toggleComplete={toggleComplete} 
        deleteTodo={deleteTodo} 
        updateDueDate={updateDueDate} 
      />
      <Footer />
    </div>
  );
};

export default App;
