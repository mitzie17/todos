import ListItem from "@mui/material/ListItem";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import Create from "@mui/icons-material/Create";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";

const TodoForm = ({ addTodo }) => {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(text);
    setText("");
  };

  return (
    <div>
      TodoForm
      <ListItem />
      <form onSubmit={handleSubmit}>
        <TextField
          id="outlined-basic"
          label="Outlined"
          variant="outlined"
          onChange={handleChange}
          value={text}
          slotProps={{
            input: {
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton aria-label="create todo" edge="end" type="submit">
                    <Create />
                  </IconButton>
                </InputAdornment>
              ),
            },
          }}
        />
      </form>
      <ListItem />
    </div>
  );
};

export default TodoForm;
