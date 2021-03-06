import React, { Fragment } from 'react'
import { Grid } from '@mui/material'
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import './menuOptionsComponents.css'

const PartnerAdmin = () => {
	const [title, setTitle] = React.useState('');
	const [description, setDescription] = React.useState('');
	const [text, setText] = React.useState('');
	const [secondaryText, setSecondaryText] = React.useState('');


	return (
		<Fragment>
			<p className="optionHeader">Administración de convenios</p>
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
								label="INGRESA NUEVO CONVENIO"
								multiline
								rows={4}
								value={title}
								onChange={e => setTitle(e.target.value)}
								variant="outlined"
							/>

							<TextField
								id="outlined-multiline-static"
								label="INGRESA LA DESCRIPCIÓN"
								multiline
								rows={4}
								value={description}
								onChange={e => setDescription(e.target.value)}
								variant="outlined"
							/>
							<button className="menuOptionsbutton" type="submit" variant="contained">Ingresar convenio</button>
						</div>


					</Box>
				</Grid>
			</Container>
		</Fragment>
	)
}

export default PartnerAdmin;
