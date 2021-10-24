import React from "react";
import { DataGrid } from '@mui/x-data-grid';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import './userAdmin.css'

const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'firstName', headerName: 'Nombres', width: 140 },
    { field: 'lastName', headerName: 'Apellidos', width: 140 },
    { field: 'dateOfBirth', headerName: 'Fecha de nacimiento', type: 'date', width: 140 },
    /*  {
         field: 'fullName',
         headerName: 'Full name',
         description: 'This column has a value getter and is not sortable.',
         sortable: false,
         width: 160,
         valueGetter: (params) =>
             `${params.getValue(params.id, 'firstName') || ''} ${params.getValue(params.id, 'lastName') || ''
             }`,
     }, */
    { field: 'pronouns', headerName: 'Pronombres', width: 140 },
    { field: 'tshirtSize', headerName: 'Talla de polera', width: 140 },
    { field: 'shoeSize', headerName: 'Talla de calzado', width: 140 },
    { field: 'numberOfChildren', headerName: 'Cantidad de hijos', width: 140 }
];

const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

const UsersTable = () => {

    return (
        <div>
            <Paper
                sx={{
                    p: 2,
                    display: 'flex',
                    borderRadius: 2,
                    margin: 3,
                }}
                elevation={12}
            >
                <Stack direction="row" spacing={30}>
                    <Stack direction="row" spacing={2}>
                        <TextField 
                        id="outlined-size-small" 
                        size="small" 
                        label="Ingrese nombre" 
                        variant="outlined" 
                        />
                        <button variant="contained" className="userAdminbutton">Buscar por nombre</button>
                    </Stack>
                    <Stack direction="row" spacing={2}>
                        <TextField 
                        id="outlined-size-small" 
                        size="small" 
                        label="Ingrese apellido" 
                        variant="outlined" 
                        />
                        <button variant="contained" className="userAdminbutton">Buscar por apellido</button>
                    </Stack>
                </Stack>
            </Paper>
            <Paper
                sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 420,
                    borderRadius: 2,
                    margin: 3
                }}
                elevation={12}
            >
                <DataGrid
                    rows={rows}
                    columns={columns}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                    checkboxSelection
                />
            </Paper>
            <Stack direction="row" spacing={2} justifyContent="center">
                <button variant="contained" className="userAdminbutton">Borrar usuario</button>
                <button variant="contained" className="userAdminbutton">Editar usuario</button>
            </Stack>
        </div>
    );
}

export default UsersTable;
