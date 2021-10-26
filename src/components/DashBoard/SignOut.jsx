import React from 'react'
import Button from '@mui/material/Button'
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";

const auth = getAuth(app)


const SignOut = () => {
    return (
        <div>
            <Button variant="text" color="default" onClick={() => signOut(auth)}>
              Cerrar Sesion
            </Button>
        </div>
    )
}

export default SignOut
