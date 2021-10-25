import React from "react";
import { DataGrid } from '@mui/x-data-grid';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Divider from '@mui/material/Divider';
import './userAdmin.css'

const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'firstName', headerName: 'Nombres', width: 140 },
    { field: 'lastName', headerName: 'Apellidos', width: 140 },
    { field: 'dateOfBirth', headerName: 'Fecha de nacimiento', width: 220 },
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
    { field: 'pronouns', headerName: 'Pronombres', width: 160 },
    { field: 'tshirtSize', headerName: 'Talla polera', width: 150 },
    { field: 'shoeSize', headerName: 'Talla calzado', width: 160 },
    { field: 'numberOfChildren', headerName: 'Hijos', width: 140 }
];

const rows = [
    { id: 1, lastName: 'Juan', firstName: 'Perez', dateOfBirth: '3-12-1986', pronouns: 'Él', tshirtSize: 'L', shoeSize: '42', numberOfChildren: 'no tiene' },
    { id: 2, lastName: 'Juan', firstName: 'Perez', dateOfBirth: '3-12-1986', pronouns: 'Él', tshirtSize: 'L', shoeSize: '42', numberOfChildren: 'no tiene' },
    { id: 3, lastName: 'Juan', firstName: 'Perez', dateOfBirth: '3-12-1986', pronouns: 'Él', tshirtSize: 'L', shoeSize: '42', numberOfChildren: 'no tiene' },
    { id: 4, lastName: 'Juan', firstName: 'Perez', dateOfBirth: '3-12-1986', pronouns: 'Él', tshirtSize: 'L', shoeSize: '42', numberOfChildren: 'no tiene' },
    { id: 5, lastName: 'Juan', firstName: 'Perez', dateOfBirth: '3-12-1986', pronouns: 'Él', tshirtSize: 'L', shoeSize: '42', numberOfChildren: 'no tiene' },
    { id: 6, lastName: 'Juan', firstName: 'Perez', dateOfBirth: '3-12-1986', pronouns: 'Él', tshirtSize: 'L', shoeSize: '42', numberOfChildren: 'no tiene' },
    { id: 7, lastName: 'Juan', firstName: 'Perez', dateOfBirth: '3-12-1986', pronouns: 'Él', tshirtSize: 'L', shoeSize: '42', numberOfChildren: 'no tiene' },
    { id: 8, lastName: 'Juan', firstName: 'Perez', dateOfBirth: '3-12-1986', pronouns: 'Él', tshirtSize: 'L', shoeSize: '42', numberOfChildren: 'no tiene' },
    { id: 9, lastName: 'Juan', firstName: 'Perez', dateOfBirth: '3-12-1986', pronouns: 'Él', tshirtSize: 'L', shoeSize: '42', numberOfChildren: 'no tiene' },
    { id: 10, lastName: 'Juan', firstName: 'Perez', dateOfBirth: '3-12-1986', pronouns: 'Él', tshirtSize: 'L', shoeSize: '42', numberOfChildren: 'no tiene' },
    { id: 11, lastName: 'Juan', firstName: 'Perez', dateOfBirth: '3-12-1986', pronouns: 'Él', tshirtSize: 'L', shoeSize: '42', numberOfChildren: 'no tiene' },
    { id: 12, lastName: null, firstName: null, dateOfBirth: null, pronouns: null, tshirtSize: null, shoeSize: null, numberOfChildren: null },
];

const UsersTable = () => {

    return (
        <div>
            <Paper
                sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 650,
                    borderRadius: 2,
                    margin: 3
                }}
                elevation={12}
            >
                <Stack direction="row"  divider={<Divider orientation="vertical" flexItem />} spacing={{ xs: 4, sm: 8, md: 16 }} marginBottom={3}>
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
                <DataGrid
                    rows={rows}
                    columns={columns}
                    pageSize={10}
                    rowsPerPageOptions={[10]}
                    checkboxSelection
                    rowHeight={35}
                />
                <Stack direction="row" spacing={2} justifyContent="center" paddingTop='15px'>
                    <button variant="contained" className="userAdminbutton editButton">Editar usuario</button>
                    <button variant="contained" className="userAdminbutton deleteButton">Borrar usuario</button>
                </Stack>
            </Paper>

        </div>
    );
}

export default UsersTable;
