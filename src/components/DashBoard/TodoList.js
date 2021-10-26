import * as React from 'react';
import Title from './Title';
import { Input, Typography } from '@mui/material';
import { useState } from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import Grid from '@mui/material/Grid'
import { FormControl, Container, Button, TextField } from "@material-ui/core";
import AddIcon from '@material-ui/icons/Add';
import Dashboard from './Dashboard';

function preventDefault(event) {
  event.preventDefault();
}

export default function TodoList( /* {addTodo} */) {
  const [item, setItem] = useState("");
	const [newItem, setNewItem] = useState([]);
	
	const firstEvent = (event) => {
		setItem(event.target.value);
	}
	
	const secondEvent = () => {
		

		setNewItem((prev)=>{
			return [...prev, item]
		});
		
		setItem("");
		
	}
	
	const thirdEvent = () => {
		setNewItem([]);
	}
	
 /*  const [text, setText] = useState({
    id:"",
    task:"",
  });

  function handleTaskInputChange(e){
    setText({...text, task: e.target.value});
  }

  function handleSubmit(e){
    e.preventDefault();
    if (text.task.trim()){
      addTodo({...text});
      setText({...text, task:"" });
    } 
  } */
 /* const handleChange = (e) => setText(e.target.value);
  const createTodo = (e) => {
    e.preventDefault();
    setText("");
    makeTodos(text);
  }  */
  return (
    <React.Fragment>
      <Typography variant="h6">To do list </Typography>
      <form /*onSubmit= {handleSubmit} */>
          <FormControl fullWidth={true}>
            <TextField
              label="Añadir"
              variant="standard"
              onChange={firstEvent}/* {handleTaskInputChange}  */
              required={true}
              value= {item}/* {text.task}  */
            />
            <Button
              variant="contained"
              color="primary"
              size="small"
              style={{ marginTop: 5, background:'linear-gradient(50deg, #af861f 20%, #fbc02d 90%)' }}
              onClick={secondEvent}
              
            >
              <AddIcon />
            </Button>

          </FormControl>
          <ul className="textFont">
					{
						newItem.map((val) => {
							return <li> {val} </li>;
						})
					}
				</ul>
        </form>
        <div>
        <Button  onClick={thirdEvent}>
					<DeleteIcon />Borrar todo
				</Button>
        </div>
  
    </React.Fragment>
  );
}
