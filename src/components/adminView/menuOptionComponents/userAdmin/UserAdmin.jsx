import React from 'react'
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import './userAdmin.css'
import { collection, getDocs } from "firebase/firestore";
import { db } from '../../../../firebase';

const UserAdmin = () => {

    const getPersonalData = async () => {
        const querySnapshot = await getDocs(collection(db, "users"));
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
        });
    }

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
                    <button variant="contained" className="userAdminbutton" href="/userAdmin/Add">Agregar usuarios</button>
                    <button variant="contained" className="userAdminbutton" href="/userAdmin/editOrDelete" onClick={() => getPersonalData()}>Editar o eliminar usuarios</button>
                </Stack>
            </Paper>
        </div>
    )
}

export default UserAdmin






