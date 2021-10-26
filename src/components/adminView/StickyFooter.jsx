import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';

function Copyright() {
  return (
    <Typography variant="body2" color="#FFFFFF">
      {'Copyright © '}
      <Link color="#FFFFFF" href="https://stefanini.com/es">
        Stefanini Group
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const StickyFooter =() => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      <CssBaseline />
    
      <Box
        component="footer"
        sx={{
          py: 3,
          px: 2,
          mt: 'auto',
          background: 'linear-gradient(to right, #070926,#167373 )'
        }}
      >
        <Container maxWidth="sm">
          <Typography variant="body1" color="#FFFFFF">
          </Typography>
          <Copyright />
        </Container>
      </Box>
    </Box>
  );
}

export default StickyFooter;