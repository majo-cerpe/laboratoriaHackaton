import React, { Fragment } from 'react';          
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';

const allOptions = [
    {
      value: 'No tengo hijos',
      label: 'No tengo hijos',
    },
    {
      value: '1',
      label: '1',
    },
    {
      value: '2',
      label: '2',
    },
    {
      value: '3',
      label: '3',
    },
    {
        value: '4',
        label: '4',
    },
    {
        value: '5',
        label: '5',
    },
    {
        value: 'Más de 5',
        label: 'Más de 5',
    },
  ];

const InfoUser = () => {

      const [childOptions, setChildOptions] = React.useState('No tengo hijos');

  const handleChange = (event) => {
    setChildOptions(event.target.value);
  }; 
    return (
        <Fragment>
        <div>
        <TextField
          required
          id="outlined-required"
          label="Nombre"
          /* defaultValue="Isabel" */
        />
        <TextField
          required
          id="outlined-required"
          label="Apellido"
          /* defaultValue="Hello World" */
        />
        <TextField
          id="outlined"
          label="Pronombres"
          helperText="ej. ella/el/otro"
        />
        <TextField
          id="outlined"
          label="Talla Polera"
          /* defaultValue="Hello World" */
          helperText="Para enviar regalos"

        />
        <TextField
          id="outlined-number"
          label="N° de Zapato"
          type="number"
          helperText="Para enviar regalos"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField 
        id="outlined"
        label="Hobbies" 
        
        />
        <TextField
          id="outlined-select-currency"
          select
          label="N° de Hijos"
          value={childOptions}
          onChange={handleChange}
        >
          {allOptions.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </div>
      <Box 
      /* bgcolor="primary.main"
      color="primary.contrastText" */
      display= 'flex'
      justifyContent= 'flex-end'>

      <Button variant="contained" color="primary">
          Guardar
      </Button>
      </Box>
    </Fragment>       
       
    )
}

export default InfoUser
