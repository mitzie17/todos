import React from "react";
import { useState, useEffect } from "react";
import List from "@mui/material/List";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

// temporary data to start working with
const initialTodos = [
  { id: 1, text: "walk the dog", completed: false },
  { id: 2, text: "walk the cat", completed: false },
  { id: 3, text: "walk the turtle", completed: true },
  { id: 4, text: "walk the chickens", completed: false },
];

const getInitialData = () => {
  const data = JSON.parse(localStorage.getItem("todos"));
  if (!data) return [];
  return data;
};

const TodoList = () => {
  const [todos, setTodos] = useState(getInitialData);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

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

  const addTodo = (text) => {
    setTodos((prevTodos) => {
      return [
        ...prevTodos,
        { text: text, id: crypto.randomUUID(), completed: false },
      ];
    });
  };
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          margin: 5,
        }}
      >
        <Typography variant="h2" component="h1" sx={{ flexGrow: 1 }}>
          Todos
        </Typography>
        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        >
          {todos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              removeTodo={() => removeTodo(todo.id)}
              toggle={() => toggleTodo(todo.id)}
            />
          ))}
          <TodoForm addTodo={addTodo} />
        </List>
      </Box>
    </div>
  );
};

export default TodoList;
