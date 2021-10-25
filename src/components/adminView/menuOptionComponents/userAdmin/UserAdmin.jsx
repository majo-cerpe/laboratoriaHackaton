import React from 'react'
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import './userAdmin.css'

const UserAdmin = () => {
    return (
        <div>
            Administración de Usuarios
            <Paper
                sx={{
                    p: 2,
                    display: 'flex',
                    borderRadius: 2,
                    marginLeft: 3,
                    marginRight: 3,
                    marginButton: 3
                }}
                elevation={12}
            >
                <Stack direction="row" spacing={2} justifyContent="center">
                    <a variant="contained" className="userAdminbutton" href="/userAdmin/Add">Agregar usuarios</a>
                    <a variant="contained" className="userAdminbutton" href="/userAdmin/editOrDelete">Editar o eliminar usuarios</a>
                </Stack>
            </Paper>
        </div>
    )
}

export default UserAdmin






