import React, { Fragment } from 'react'
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import referido from '../../assest/referido.png';

const RhhReferralsTexts = () => {
    return (
        <Fragment>
            <Box
/*             bgcolor="secondary.main"
            color="secondary.contrastText" */
            alignItems="center"
            justifyContent= 'center'
            style={{textAlign: 'center'}} 
            >
            <h2>¿Conoces a alguien que quiera ser un Stefaniner?</h2>
            <h5>Sube el curriculm de tu referido aquí</h5>
            <img src={referido} style={{maxWidth:250}} >
              </img> 
            </Box>
        </Fragment>
    )
}

export default RhhReferralsTexts
