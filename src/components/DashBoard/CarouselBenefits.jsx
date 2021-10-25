import React from 'react'
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@material-ui/core'
import Grid from '@mui/material/Grid'
import { Box } from '@mui/system';
import matri from '../../assest/matri.jpg';
/* import { styled } from '@mui/styles'; */
/* 
const MyBox = styled(Box)({
      background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      border: 0,
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      color: 'white',
      height: 48,
      padding: '0 30px',
    
  }); */


export default function CarouselBenefits() {
   
    const allBenefits = [
        {
            name: 'Matrimonio',
            description: 'Bono por Matrimonio Unión civil $100.000 bruto',
            image:"https://imgur.com/a/3xoUNee",
        },
        {
            name: 'Cumpleaños',
            description: 'Si tu cumpleaños cae fin de semana o feriado, puedes tomar la tarde dentro del mes',
            image:"",
        },
        {
            name: 'Nacimiento',
            description: 'Bono por Nacimiento de un hijo $100.000 bruto',
            image:"",
        },
    ];

    return (
        <Carousel>
            {allBenefits.map((benefit, i) => (
                <ArrayBenefit key={i} {...benefit} />
            ))}
        </Carousel>
    );
}

const ArrayBenefit = ({name, description, image}) => {
   /*  const classes =useStyles(); */
    return (
        <React.Fragment>
           {/*  <img>{image}</img> */}
            <h3>{name}</h3>
            <p>{description}</p>
            <Box  sx={{display: "flex", alignSelf:"flex-end"}}>
            <Button variant="contained" color="primary" size ="small" >ver más</Button>
            </Box>
        </React.Fragment>
    );
};