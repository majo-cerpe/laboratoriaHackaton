import React, { Fragment } from 'react'
import { collection, getDocs } from "firebase/firestore";
import { db } from '../../../firebase'
import { Grid } from '@mui/material'
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import './menuOptionsComponents.css'


const BenefitAdmin = () => {

	const [title, setTitle] = React.useState('');
	const [description, setDescription] = React.useState('');
	const [text, setText] = React.useState('');
	const [secondaryText, setSecondaryText] = React.useState('');
	const [task, setTask] = React.useState([])

	React.useEffect(() => {

		const bringData = async () => {
			try {

				const data = await getDocs(collection(db, "benefits"));
				const arrayData = data.docs.map(doc => ({ id: doc.id, ...doc.data() }))
				setTask(arrayData)
			} catch (error) {
				console.log(error);
			}
		}
		bringData()
	}, [])

	return (
		<Fragment>
			<p className="optionHeader">Administración de beneficios corporativos</p>
			<p className="underConstruction">En construcción. Estamos Trabajando para usted   :) </p>
			<Container maxWidth="sm">
				<Grid container spacing={1} justify="center">

					<Box
						component="form"
						sx={{
							'& .MuiTextField-root': { m: 1, width: '25ch' },
						}}
						noValidate
						autoComplete="off"
					>
						<div>
							<TextField
								id="outlined-multiline-flexible"
								label="Título"
								multiline
								rows={4}
								value={title}
								onChange={e => setTitle(e.target.value)}
								variant="outlined"
							/>

							<TextField
								id="outlined-multiline-static"
								label="Descripción"
								multiline
								rows={4}
								value={description}
								onChange={e => setDescription(e.target.value)}
								variant="outlined"
							/>
						</div>
						<div>

							<TextField
								id="filled-multiline-static"
								label="Datos Complementarios"
								multiline
								rows={4}
								value={text}
								onChange={e => setText(e.target.value)}
								variant="outlined"
							/>
						</div>
						<div>
							<TextField
								id="standard-multiline-flexible"
								label="Letra chica"
								multiline
								rows={4}
								value={secondaryText}
								onChange={e => setSecondaryText(e.target.value)}
								variant="outlined"
							/>
							<button className="menuOptionsbutton" type="submit" variant="contained">Ingresar beneficio</button>
						</div>
					</Box>
				</Grid>
			</Container>
		</Fragment>
	)
}

export default BenefitAdmin;
