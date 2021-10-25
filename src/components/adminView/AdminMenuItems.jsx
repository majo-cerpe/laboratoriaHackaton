import * as React from 'react';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import DashboardIcon from '@mui/icons-material/Dashboard';

import PeopleIcon from '@mui/icons-material/People';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import SavingsIcon from '@mui/icons-material/Savings';
import './adminMenuItems.css'



import AssignmentIcon from '@mui/icons-material/Assignment';

export const mainListItems = (
	<div >
		<a component="a" href="/adminViewDashboard" className="button">
			<ListItemIcon>
				<DashboardIcon />
			</ListItemIcon>
			<ListItemText primary="Dashboard" />
		</a>

		<a component="a" href="/userAdmin" className="button">
			<ListItemIcon>
				<PeopleIcon />
			</ListItemIcon>
			<ListItemText primary="Administración de Usuarios" />
		</a>

		<a component="a" href="/benefitAdmin" className="button">
			<ListItemIcon>
				<VolunteerActivismIcon />
			</ListItemIcon>
			<ListItemText primary="Administración de Beneficios" />
		</a>

		<a component="a" href="/partnershipAdmin" className="button">
			<ListItemIcon>
				<SavingsIcon />
			</ListItemIcon>
			<ListItemText primary="Administración de Convenios" />
		</a>

		<a component="a" href="/momentsAdmin" className="button">
			<ListItemIcon>
				<VolunteerActivismIcon />
			</ListItemIcon>
			<ListItemText primary="Administración de Momentos Stefaniners" />
		</a>


	</div>
);

export const secondaryListItems = (
	<div>
		<ListSubheader inset>Otra sección</ListSubheader>
		<a component="a" href="/adminViewDashboard" className="button">
			<ListItemIcon>
				<AssignmentIcon />
			</ListItemIcon>
			<ListItemText primary="Lorem" />
		</a>
	</div>
);
