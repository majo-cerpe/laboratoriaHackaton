import React from 'react'
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import './userAdmin.css'
import '../menuOptionsComponents.css'
import { collection, getDocs } from "firebase/firestore";
import { db } from '../../../../firebase';
import { Link } from "react-router-dom";

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
            <p className="optionHeader">Administración de Usuarios</p>
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
                    <Link to="/userAdmin/Add">
                        <button variant="contained" className="userAdminbutton" >Agregar usuarios</button>
                    </Link>
                    <Link to="/userAdmin/editOrDelete">
                        <button  variant="contained" className="userAdminbutton" onClick={() => getPersonalData()}>Editar o eliminar usuarios</button>
                    </Link>
                </Stack>
            </Paper>
        </div>
    )
}

export default UserAdmin






