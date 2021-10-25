import React, { Fragment } from 'react'
import Paper from '@mui/material/Paper'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

const childAllOptions = [
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

const tshirtSizeAllOptions = [
    {
        value: '',
        label: '',
    },
    {
        value: 'XS',
        label: 'XS',
    },
    {
        value: 'S',
        label: 'S',
    },
    {
        value: 'M',
        label: 'M',
    },
    {
        value: 'L',
        label: 'L',
    },
    {
        value: 'XL',
        label: 'XL',
    },
    {
        value: '2XL',
        label: '2XL',
    },
];


const UserAdd = () => {
    const [childOptions, setChildOptions] = React.useState('No tengo hijos');
    const [tshirtSize, setTshirtSize] = React.useState('');

    const childHandleChange = (event) => {
        setChildOptions(event.target.value);
    };

    const tshirtHandleChange = (event) => {
        setTshirtSize(event.target.value);
    };

    return (
        <Paper
            sx={{
                p: 2,
                display: 'flex',
                flexDirection: 'column',
                borderRadius: 2,
                margin: 3,
            }}
            elevation={12}
        >
            <Box
                component="form"
                /*      bgcolor="secondary.main"
                     color="secondary.contrastText" */
                mt={4}
                sx={{
                    margin:0,
                    '& .MuiTextField-root': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
            >
                <Fragment>
                    <div className="addUserInputs">  
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
                        />
                        <TextField
                            id="outlined"
                            label="Contraseña temporal"
                        />
                        <TextField
                            id="outlined"
                            label="Pronombres"
                            helperText="ej. ella/él/elle/indiferente"
                        />
                         <TextField
                            id="outlined-select-currency"
                            select
                            label="Talla de polera"
                            value={tshirtSize}
                            helperText="Para enviar regalos"
                            onChange={tshirtHandleChange}
                        >
                            {tshirtSizeAllOptions.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>
                        <TextField
                            id="outlined-number"
                            label="N° de calzado"
                            type="number"
                            helperText="Para enviar regalos"
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                        <TextField
                            id="outlined-select-currency"
                            select
                            label="N° de Hijos"
                            value={childOptions}
                            onChange={childHandleChange}
                        >
                            {childAllOptions.map((option) => (
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
                marginTop='30px'
                >
                <button className="userAdminbutton">
                    Agregar usuario
                </button>
            </Box>
        </Paper>
    )
}

export default UserAdd