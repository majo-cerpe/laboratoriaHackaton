import React, { Fragment, useState, useEffect} from 'react'
import Paper from '@mui/material/Paper'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import './userAdmin.css'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { collection, addDoc, doc, setDoc } from '@firebase/firestore';
import { db } from '../../../../firebase';



const numberOfChildrenAllOptions = [
    {
        value: 'No tengo hijos',
        label: 'No tengo hijos',
    },
    {
        value: '1',
        label: '1',
    },
    {
        value: '2',
        label: '2',
    },
    {
        value: '3',
        label: '3',
    },
    {
        value: '4',
        label: '4',
    },
    {
        value: '5',
        label: '5',
    },
    {
        value: 'Más de 5',
        label: 'Más de 5',
    },
];

const tshirtSizeAllOptions = [
    {
        value: '',
        label: '',
    },
    {
        value: 'XS',
        label: 'XS',
    },
    {
        value: 'S',
        label: 'S',
    },
    {
        value: 'M',
        label: 'M',
    },
    {
        value: 'L',
        label: 'L',
    },
    {
        value: 'XL',
        label: 'XL',
    },
    {
        value: '2XL',
        label: '2XL',
    },
];


const UserAdd = () => {

    const [numberOfChildren, setNumberOfChildren] = React.useState('No tengo hijos');
    const [tshirtSize, setTshirtSize] = React.useState('');

    const numberOfChildrenHandleChange = (event) => {
        setNumberOfChildren(event.target.value);
    };

    const tshirtSizeHandleChange = (event) => {
        setTshirtSize(event.target.value);
    };

    /////////////////////////////////////////////////////////////////////////////////
    const [personalData, setPersonalData] = useState({
        name: '',
        lastname: '',
        pronouns: '',
        dateOfBirth: '',
        email: '',
        password: '',
        tshirtSize: '',
        shoeSize: '',
        numberOfChildren: ''
    })

    const handleInputChange = (event) => {
        setPersonalData({
            ...personalData,
            [event.target.name]: event.target.value
        })
    }

    const createUser = () => {
        const email = personalData.email;
        const password = personalData.password

        const auth = getAuth();
        createUserWithEmailAndPassword(auth, personalData.email, personalData.password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
            });
    }

    const saveInFirestore = async () => {
        const docRef = await addDoc(collection(db, 'users'), {
            name: personalData.name,
            lastname: personalData.lastname,
            pronouns: personalData.pronouns,
            dateOfBirth: personalData.dateOfBirth,
            email: personalData.email,
           /*  password: personalData.password, */
            tshirtSize: tshirtSize,
            shoeSize: personalData.shoeSize,
            numberOfChildren: numberOfChildren
        });
    };


    const addAndSaveButton = () => {
        createUser();
        saveInFirestore()
    }

    ///////////////////////////////////////////////////////////////////////////////////////

    return (
        <Paper
            sx={{
                p: 2,
                display: 'flex',
                flexDirection: 'column',
                borderRadius: 2,
                margin: 3,
            }}
            elevation={12}
        >
            <Box
                component="form"
                mt={4}
                sx={{
                    margin: 0,
                    '& .MuiTextField-root': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
            >
                <Fragment>
                    <div className="addUserInputs">

                        <TextField
                            required
                            label="Nombre"
                            name="name"
                            onChange={handleInputChange}
                        />

                        <TextField
                            required
                            label="Apellido"
                            name="lastname"
                            onChange={handleInputChange}
                        />

                        <TextField

                            label="Pronombres"
                            helperText="ej. ella/él/elle/indiferente"
                            name="pronouns"
                            onChange={handleInputChange}
                        />

                        <TextField
                            type="date"
                            helperText="Fecha de nacimiento"
                            name="dateOfBirth"
                            onChange={handleInputChange}
                        />

                        <TextField
                            required
                            label="correo electrónico"
                            name="email"
                            onChange={handleInputChange}
                        />

                        <TextField
                            required
                            type="password"
                            label="Contraseña temporal"
                            name="password"
                            onChange={handleInputChange}
                        />

                        <TextField
                            select
                            label="Talla de polera"
                            value={tshirtSize}
                            helperText="Para enviar regalos"
                            name="tshirtSize"
                            onChange={tshirtSizeHandleChange}

                        >
                            {tshirtSizeAllOptions.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}

                        </TextField>

                        <TextField
                            label="N° de calzado"
                            type="number"
                            helperText="Para enviar regalos"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            name="shoeSize"
                            onChange={handleInputChange}
                        />

                        <TextField
                            select
                            label="N° de Hijos"
                            value={numberOfChildren}
                            name="numberOfChildren"
                            onChange={numberOfChildrenHandleChange}

                        >
                            {numberOfChildrenAllOptions.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>

                    </div>
                </Fragment>
            </Box>
            <Box
                display='flex'
                justifyContent='center'
                align-items='end'
                marginTop='30px'
            >
                <p className="required">*Campo obligatorio</p>
                <hr />
                <button type="submit" className="userAdminbutton addButton" onClick={() => addAndSaveButton()}>
                    Agregar usuario
                </button>
            </Box>
        </Paper>
    )
}

export default UserAdd