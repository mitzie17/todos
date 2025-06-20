import { useState } from "react";
import "./App.css";
import CssBaseline from "@mui/material/CssBaseline";
import TodoList from "./TodoList";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <CssBaseline />
      <h1>Todos</h1>
      <TodoList />
    </>
  );
}

export default App;
