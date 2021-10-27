import React from "react";
import { DataGrid } from '@mui/x-data-grid';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Divider from '@mui/material/Divider';
import './userAdmin.css'
import { collection, getDocs } from "firebase/firestore";
import { db } from '../../../../firebase';


const columns = [
   /*  { field: 'id', headerName: 'ID', width: 70 }, */
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

const rows = [];

const getPersonalData = async () => {
    const querySnapshot = await getDocs(collection(db, "users"));
    querySnapshot.forEach((doc) => {
        rows.push({ id: doc.id, lastName: doc.data().lastname, firstName: doc.data().name, dateOfBirth: doc.data().dateOfBirth, pronouns: doc.data().pronouns, tshirtSize: doc.data().tshirtSize, shoeSize: doc.data().shoeSize, numberOfChildren: doc.data().numberOfChildren })
    });
}
getPersonalData();

const UsersTable = () => {


    return (
        <div>
            <Paper
                sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 570,
                    borderRadius: 2,
                    margin: 3
                }}
                elevation={12}
            >
{/*                 <Stack direction="row" divider={<Divider orientation="vertical" flexItem />} spacing={{ xs: 4, sm: 8, md: 16 }} marginBottom={3}>
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
                </Stack> */}

                <DataGrid
                    rows={rows}
                    columns={columns}
                    pageSize={10}
                    rowsPerPageOptions={[10]}
                    checkboxSelection
                    rowHeight={30}
                />
                <p>*Para buscar un usuario o grupo de usuarios en particular utilice los filtros disponibles en el símbolo ⁝ de cada columna</p>

                <Stack direction="row" spacing={2} justifyContent="center" paddingTop='15px'>
                    <button variant="contained" className="userAdminbutton editButton">Editar usuario</button>
                    <button variant="contained" className="userAdminbutton deleteButton">Borrar usuario</button>
                </Stack>
            </Paper>

        </div>
    );
}

export default UsersTable;
