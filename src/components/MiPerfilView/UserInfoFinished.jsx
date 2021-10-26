import React from 'react'
import Typography from '@mui/material/Typography';
const UserInfoFinished = () => {
    return (
        <div>
            <Typography variant="p" /* style={{ backgroundColor: "#fffde7" }} */ className="name">Nombre: Nombre</Typography>
            <p className="lastName">Apellido: Apellido</p>
            <p className="pronouns">Pronombres: Pronombres</p>
            <p className="size">Talla Polera: Talla</p>
            <p className="shoeSize">N° Calzado: N°</p>
            <p className="hobbies">Hobbies: Hobbies</p>
            <p className="child">N° de Hijos: N°</p>
        </div>
    )
}

export default UserInfoFinished
