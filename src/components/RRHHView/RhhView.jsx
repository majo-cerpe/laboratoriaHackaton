import * as React from 'react';
import { useState } from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import { mainListItems, secondaryListItems } from '../DashBoard/listItems';
import RhhText from './RhhText';
import RhhCard from './RhhCard.jsx';
import rhh from './rhh.json';
import RhhReferralsTexts from './RhhReferralsTexts';
import ReferralsFiles from './ReferralsFiles';
import logonovobranco from '../../assest/logonovobranco.png';
import Avatar from '@mui/material/Avatar'
import './rrhh.css'





function Copyright(props) {
	return (
		<Typography variant="body2" color="text.secondary" align="center" {...props}>
			{'Copyright © '}
			<Link color="inherit" href="https://mui.com/">
				Your Website
			</Link>{' '}
			{new Date().getFullYear()}
			{'.'}
		</Typography>
	);
}

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
	shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
	zIndex: theme.zIndex.drawer + 1,
	transition: theme.transitions.create(['width', 'margin'], {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.leavingScreen,
	}),
	...(open && {
		marginLeft: drawerWidth,
		width: `calc(100% - ${drawerWidth}px)`,
		transition: theme.transitions.create(['width', 'margin'], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.enteringScreen,
		}),
	}),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
	({ theme, open }) => ({
		'& .MuiDrawer-paper': {
			position: 'relative',
			whiteSpace: 'pre-line',
			width: drawerWidth,
			transition: theme.transitions.create('width', {
				easing: theme.transitions.easing.sharp,
				duration: theme.transitions.duration.enteringScreen,
			}),
			boxSizing: 'border-box',
			...(!open && {
				overflowX: 'hidden',
				transition: theme.transitions.create('width', {
					easing: theme.transitions.easing.sharp,
					duration: theme.transitions.duration.leavingScreen,
				}),
				width: theme.spacing(7),
				[theme.breakpoints.up('sm')]: {
					width: theme.spacing(9),
				},
			}),
		},
	}),
);

const mdTheme = createTheme();

function DashboardContent() {
	const [open, setOpen] = React.useState(true);
	const toggleDrawer = () => {
		setOpen(!open);
	};

	const [texts, setTexts] = useState()


	function addTodo(text) {
		setTexts([text, ...texts]);
	}
	return (
		<ThemeProvider theme={mdTheme}>
			<Box sx={{ display: 'flex' }}>
				<CssBaseline />
				<AppBar position="absolute" open={open} style={{background: 'linear-gradient(to right, #070926, #A22E89)'}}>
					<Toolbar
						sx={{
							pr: '24px', // keep right padding when drawer closed
						}}
					>
						<IconButton
							edge="start"
							color="inherit"
							aria-label="open drawer"
							onClick={toggleDrawer}
							sx={{
								marginRight: '36px',
								...(open && { display: 'none' }),
							}}
						>
							<MenuIcon />
						</IconButton>
						<img src={logonovobranco} style={{ maxWidth: 150 }} >
						</img>
						<Typography
							component="h1"
							variant="h6"
							color="inherit"
							noWrap
							sx={{ flexGrow: 1 }}
						>

						</Typography>
						{/*             <IconButton color="inherit">

              <Badge badgeContent={4} color="secondary">
                <NotificationsActiveIcon />
              </Badge>
            </IconButton> */}
					</Toolbar>
				</AppBar>
				<Drawer variant="permanent" open={open}>
					<Toolbar
						sx={{
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'flex-end',
							px: [1],
						}}
					>
						<IconButton onClick={toggleDrawer}>
							<ChevronLeftIcon />
						</IconButton>
					</Toolbar>
					<Divider />
					<List>{mainListItems}</List>
					<Divider />
					<List>{secondaryListItems}</List>
				</Drawer>

				<Box
					component="main"
					sx={{
						backgroundColor: (theme) =>
							theme.palette.mode === 'light'
								? theme.palette.grey[100]
								: theme.palette.grey[900],
						flexGrow: 1,
						height: '100vh',
						overflow: 'auto',
					}}
				>
					<Toolbar />
					<RhhText />
					<Container maxWidth="lg" sx={{ mt: 3, mb: 3 }}>
						<Grid container spacing={1} /* direction='row' */>

							<Grid item xs={12} md={12} lg={12} sx={{ mt: 4, mb: 4 }}>


								{/*                 <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 680,
                    borderRadius: 8
                  }}
                  elevation ={0}
                > */}
								{/*                 <Item> */}
								<Box
									/*           bgcolor="primary.main"
											  color="primary.contrastText"  */
									p={1}
									display='flex'
									justifyContent='center'
									sx={{
										/*             height: 355,
													width:1194,  */
										display: 'flex',
										flexDirection: 'colum',


									}}
								>
									<div className="rrhhCard">
										{rhh.map((item) => (
											<Box
												/*         bgcolor="secondary.main"
														color="secondary.contrastText" */
												display='flex'
												sx={{
													mx: 10,
													marginTop: 2,
													marginBottom: 2
													/*            display: 'flex',
															   flexDirection: 'colum', */
												}}
											>
												<RhhCard
													title={item.title}
													image={item.image}
													buttonText={item.buttonText}
													secondaryText={item.secondaryText}
													link={item.link}

												/>
											</Box>

										))}
									</div>
								</Box>
								{/*     </Item> */}
								{/*                 <Box
      component="form"
      bgcolor="secondary.main"
      color="secondary.contrastText" 
      mt={4}
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >

                   </Box> */}

								{/*                 </Paper> */}
								<RhhReferralsTexts />
								<Box
									/*           bgcolor="primary.main"
											  color="primary.contrastText"  */
									p={1}
									display='flex'
									justifyContent='center'
									sx={{
										/*             height: 355,
													width:1194, */
										mt: 2,
										display: 'flex',
										flexDirection: 'row',


									}}
								>
									<ReferralsFiles />
								</Box>
							</Grid>

							{/* VISTA PERFIL */}
							{/*              <Grid item xs={12} md={4} lg={3}>
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 400,
                  }}
                  elevation ={12}
                > */}
							{/*Empieza  caja y componente Avatar */}


							{/*Empieza  caja y componente UserInfoFinished*/}
							{/*                    <Box 
          bgcolor="primary.main"
          color="primary.contrastText" 
          p={1}
          display= 'flex'
          justifyContent= 'center'
          sx={{
            height: 300,
          }}
            >

                   </Box>
                </Paper>
              </Grid> */}
							{/* Recent Orders */}
							{/*               <Grid item xs={12} md={8} lg={9}>
                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', height:240}} elevation ={12}>
               
                </Paper>
              </Grid> */}
						</Grid>
						<Copyright sx={{ pt: 4 }} />
					</Container>
				</Box>
			</Box>
		</ThemeProvider>
	);
}

export default function Dashboard() {
	return <DashboardContent />;
}
