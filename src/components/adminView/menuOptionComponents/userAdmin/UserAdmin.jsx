import React from 'react'
import Stack from '@mui/material/Stack';
import './userAdmin.css'

const UserAdmin = () => {
    return (
        <Stack direction="row" spacing={2}>
            <a variant="contained" className="userAdminbutton" href="/userAdmin/Add">Agregar usuarios</a>
            <a variant="contained" className="userAdminbutton" href="/userAdmin/editOrDelete">Editar o eliminar usuarios</a>
        </Stack>
    )
}

export default UserAdmin






