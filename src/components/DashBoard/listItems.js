import * as React from 'react';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import LayersIcon from '@mui/icons-material/Layers';
import AssignmentIcon from '@mui/icons-material/Assignment';


export const mainListItems = (
  <div>

    <a component="a" href="/home" className="button">
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </a>

    <a component="a" href="/home" className="button">
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="lorem" />
    </a>

    <a component="a" href="/Perfil" className="button">
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="Perfil" />
    </a>

    <a component="a" href="/home" className="button">
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>
      <ListItemText primary="lorem" />
    </a>

    <a component="a" href="/home" className="button">
      <ListItemIcon>
        <LayersIcon />
      </ListItemIcon>
      <ListItemText primary="lorem" />
    </a>

  </div>
);

export const secondaryListItems = (
  <div>
    <ListSubheader inset>Otra sección</ListSubheader>

    <a component="a" href="/beneficios" className="button">
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

    <a component="a" href="/" className="button">
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="lorem" />
    </a>
  </div>
);

