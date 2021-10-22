import * as React from 'react';
import Title from './Title';
import { Input } from '@mui/material';
import { useState } from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import Grid from '@mui/material/Grid'
import { FormControl, Container, Button, TextField } from "@material-ui/core";
import AddIcon from '@material-ui/icons/Add';

function preventDefault(event) {
  event.preventDefault();
}

export default function TodoList({makeTodos}) {

  const [text, setText] = useState("");

  const handleChange = (e) => setText(e.target.value);
  const createTodo = (e) => {
    e.preventDefault();
    setText("");
    makeTodos(text);
  }
  return (
    <React.Fragment>
      <Title>To do list </Title>
      <form onSubmit={createTodo}>
          <FormControl fullWidth={true}>
            <TextField
              label="Añadir"
              variant="standard"
              onChange={handleChange}
              required={true}
              value={text}
            />
            <Button
              variant="contained"
              color="primary"
              size="small"
              style={{ marginTop: 5 }}
            >
              <AddIcon />
            </Button>
          </FormControl>
        </form>
  
    </React.Fragment>
  );
}
