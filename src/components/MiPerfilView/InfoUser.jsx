import React, { Fragment } from 'react'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button'


const InfoUser = () => {

      
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
          id="outlined-helperText"
          label="Helper text"
          defaultValue="Default Value"
          helperText="Some important text"
        />
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
