import React, { Fragment } from 'react'
import Paper from '@mui/material/Paper'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
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


const UserAdd = () => {
    const [childOptions, setChildOptions] = React.useState('No tengo hijos');

    const handleChange = (event) => {
        setChildOptions(event.target.value);
    };
    return (
        <Paper
            sx={{
                p: 2,
                display: 'flex',
                flexDirection: 'column',
                height: 550,
                width: 510,
                borderRadius: 2,
                margin: 5,
            }}
            elevation={12}
        >
            <Box
                component="form"
                /*      bgcolor="secondary.main"
                     color="secondary.contrastText" */
                mt={4}
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
            >
                <Fragment>
                    <div>  
                        <TextField
                            required
                            id="outlined-required"
                            label="Nombre"
                        />
                        <TextField
                            required
                            id="outlined-required"
                            label="Apellido"
                        />
                        <TextField
                            id="outlined"
                            label="Pronombres"
                            helperText="ej. ella/el/otro"
                        />
                        <TextField
                            id="outlined"
                            type="date"
                            helperText="Fecha de nacimiento"
                        />
                        <TextField
                            id="outlined"
                            label="correo electrónico"
                            helperText="correo institucional"
                        />
                        <TextField
                            id="outlined"
                            label="Pronombres"
                            helperText="ej. ella/el/otro"
                        />
                        <TextField
                            id="outlined"
                            label="Talla Polera"
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
                </Fragment>
            </Box>
            <Box
                display='flex'
                justifyContent='center'
                align-items='end' 
                >
                <button className="userAdminbutton">
                    Agregar usuario
                </button>
            </Box>
        </Paper>
    )
}

export default UserAdd