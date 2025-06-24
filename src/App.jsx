import { useState } from "react";
import "./App.css";
import CssBaseline from "@mui/material/CssBaseline";
import TodoList from "./TodoList";
import Navbar from "./Navbar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <CssBaseline />
      <Navbar />
      <TodoList />
    </>
  );
}

export default App;
