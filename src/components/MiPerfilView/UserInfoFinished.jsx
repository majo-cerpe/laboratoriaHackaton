import React from 'react'
import Typography from '@mui/material/Typography';
const UserInfoFinished = () => {
    return (
        <div>
            <Typography variant="p" className="name" style={{color: "#f5f5f5"}}>Nombre: Nombre</Typography>
            <p className="lastName"  style={{color: "#f5f5f5"}}>Apellido: Apellido</p>
            <p className="pronouns"  style={{color: "#f5f5f5"}}>Pronombres: Pronombres</p>
            <p className="size"  style={{color: "#f5f5f5"}}>Talla Polera: Talla</p>
            <p className="shoeSize"  style={{color: "#f5f5f5"}}>N° Calzado: N°</p>
            <p className="hobbies"  style={{color: "#f5f5f5"}}>Hobbies: Hobbies</p>
            <p className="child"  style={{color: "#f5f5f5"}}>N° de Hijos: N°</p>
        </div>
    )
}

export default UserInfoFinished
