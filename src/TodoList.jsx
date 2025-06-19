import React from "react";
import { useState } from "react";
import List from "@mui/material/List";
import TodoForm from "./TodoForm";

import TodoItem from "./TodoItem";

// temporary data to start working with
const initialTodos = [
  { id: 1, text: "walk the dog", completed: false },
  { id: 2, text: "walk the cat", completed: false },
  { id: 3, text: "walk the turtle", completed: true },
  { id: 4, text: "walk the chickens", completed: false },
];

const TodoList = () => {
  const [todos, setTodos] = useState(initialTodos);
  const removeTodo = (id) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== id);
    });
  };
  const toggleTodo = (id) => {
    setTodos((prevTodos) => {
      return prevTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        } else {
          return todo;
        }
      });
    });
  };
  return (
    <div>
      <h1>TodoList</h1>

      <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            removeTodo={() => removeTodo(todo.id)}
            toggle={() => toggleTodo(todo.id)}
          />
        ))}
        <TodoForm />
      </List>
    </div>
  );
};

export default TodoList;
