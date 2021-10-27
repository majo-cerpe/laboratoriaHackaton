import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import firabase from "../firebase";
import Image from "../assest/fondoprincipal.png"
import logopequeñoazul from '../assest/logopequeñoazul.png';
import Logostefaniniprincipal from "./Logostefaniniprincipal";
import SignInMovement from "./SignInMovement";
import Container from '@mui/material/Container'

function Copyright(props) {
	return (
		<Typography
			variant="body2"
			color="text.secondary"
			align="center"
			{...props}
		>
			{"Copyright © "}
			<a color="inherit" href="https://stefanini.com/es">
				Stefanini
			</a>{" "}
			{new Date().getFullYear()}
			{"."}
		</Typography>
	);
}

const theme = createTheme();

export default function SignInSide() {
	const handleSubmit = (event) => {
		event.preventDefault();
		const data = new FormData(event.currentTarget);
		const email = data.get("email");
		const password = data.get("password");
		console.log({
			email: email,
			password: password,
		});

		const auth = getAuth();
		signInWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				// Signed in
				const user = userCredential.user;
				if (email === "ngpena@stefanini.com") {
					window.location.assign("/adminViewDashboard");
				} else {
					window.location.assign("/home");
				}
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
				console.log(errorCode);
				if (errorCode === "auth/user-not-found") {
					// eslint-disable-next-line no-alert
					alert("No tienes una cuenta creada, Registrate");
					// eslint-disable-next-line eqeqeq
				} else if (errorCode == "auth/wrong-password") {
					// eslint-disable-next-line no-alert
					alert("Contraseña incorrecta");
				} else {
					// eslint-disable-next-line no-alert
					alert(errorMessage);
				}
			});
	};


	return (
		<ThemeProvider theme={theme}>
			<Grid container component="main" sx={{ height: '100vh' }}>
			
				<CssBaseline />

				<Grid component="box"
					item
					xs={12}
					sm={4}
					md={7}
					sx={{

						backgroundImage: `url(${Image})`,
						backgroundRepeat: 'no-repeat',
						backgroundSize: 'cover',

					}}
					
				>
					<Logostefaniniprincipal/>
					<SignInMovement  /* style={{width:5,mt: 274}}  *//>
				</Grid>
				<Grid item xs={12} sm={8} md={5}  component={Paper}  elevation={6} square>
					
					<Box
						sx={{
							my: 8,
							mx: 4,
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'center',
						}}
					>
						<Avatar src={logopequeñoazul} sx={{ m: 1 }} style={{ height: '90px', width: '90px' }}>
						</Avatar>
						<Typography component="h1" variant="h5">
							Inicia Sesión
						</Typography>
						<Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
							<TextField
								margin="normal"
								required
								fullWidth
								id="email"
								label="Email"
								name="email"
								autoComplete="email"
								autoFocus
							/>
							<TextField
								margin="normal"
								required
								fullWidth
								name="password"
								label="Contraseña"
								type="password"
								id="password"
								autoComplete="current-password"
							/>
							<FormControlLabel
								control={<Checkbox value="remember" color="primary" />}
								label="Recordarme"
							/>

							<Button
								type="submit"
								fullWidth
								variant="contained"
								sx={{ mt: 3, mb: 2 }}
							>
								Iniciar Sesión
							</Button>
							
							<Copyright sx={{ mt: 5 }} />
						</Box>
					</Box>
				</Grid>
			</Grid>
		</ThemeProvider>
	);
}
