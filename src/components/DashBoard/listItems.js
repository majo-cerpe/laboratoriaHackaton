import * as React from 'react';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import LayersIcon from '@mui/icons-material/Layers';
import AssignmentIcon from '@mui/icons-material/Assignment';
import  app  from '../../firebase';
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";

const auth = getAuth(app)

export const mainListItems = (
  <div>

    <a component="a" href="/home" className="button">
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Inicio" />
    </a>
    <a component="a" href="/Perfil" className="button">
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="Perfil" />
    </a>

    <a component="a" href="/stefaniners" className="button">
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Momentos Stefaniners" />
    </a>


    <a component="a" href="/rrhh" className="button">
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>
      <ListItemText primary="Recursos humanos" />
    </a>

  </div>
);

export const secondaryListItems = (
  <div>
    <ListSubheader inset>Otra sección</ListSubheader>

    <a component="a" href="/benefits" className="button">
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Beneficios" />
    </a>

    <a component="a" href="/convenios" className="button">
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Convenios" />
    </a>

    <a  component="a"  href="/"  className="button" onClick={() => signOut(auth)}>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Cerrar Sesión" />
    </a>
  </div>
);

