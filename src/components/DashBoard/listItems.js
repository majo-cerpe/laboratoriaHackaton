import * as React from 'react';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import GroupsIcon from '@mui/icons-material/Groups';
import  app  from '../../firebase';
import { getAuth, signOut } from "firebase/auth";
import PartyModeIcon from '@mui/icons-material/PartyMode'
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew'
import ManageAccountsIcon  from '@mui/icons-material/ManageAccounts'
import SentimentVerySatisfiedIcon  from '@mui/icons-material/SentimentVerySatisfied'

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
        <PersonIcon />
      </ListItemIcon>
      <ListItemText primary="Perfil" />
    </a>

    <a component="a" href="/stefaniners" className="button">
      <ListItemIcon>
        <PartyModeIcon />
      </ListItemIcon>
      <ListItemText primary="Momentos Stefaniners" />
    </a>


    <a component="a" href="/rrhh" className="button">
      <ListItemIcon>
        <ManageAccountsIcon />
      </ListItemIcon>
      <ListItemText primary="Recursos humanos" />
    </a>

  </div>
);

export const secondaryListItems = (
  <div>
  
    <a component="a" href="/benefits" className="button">
      <ListItemIcon>
        <SentimentVerySatisfiedIcon />
      </ListItemIcon>
      <ListItemText primary="Beneficios" />
    </a>

    <a component="a" href="/convenios" className="button">
      <ListItemIcon>
        <GroupsIcon />
      </ListItemIcon>
      <ListItemText primary="Convenios" />
    </a>

    <a  component="a"  href="/"  className="button" onClick={() => signOut(auth)}>
      <ListItemIcon>
        <PowerSettingsNewIcon />
      </ListItemIcon>
      <ListItemText primary="Cerrar Sesión" />
    </a>
  </div>
);

