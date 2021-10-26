import React from 'react'
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@material-ui/core'
import Grid from '@mui/material/Grid'
import { Box } from '@mui/system';


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
            image:"https://as2.ftcdn.net/v2/jpg/01/15/58/51/1000_F_115585198_IEN2JGoZFVHdeZ7SBsa9YJBQcARJ4JDC.jpg",
        },
        {
            name: 'Cumpleaños',
            description: 'Si tu cumpleaños cae fin de semana o feriado, puedes tomar la tarde dentro del mes',
            image:"https://jeshoots.com/wp-content/uploads/2017/10/IMG_5289-728x485.jpg",
        },
        {
            name: 'Nacimiento',
            description: 'Bono por Nacimiento de un hijo $100.000 bruto',
            image:"https://c8.alamy.com/compes/2atkp45/tres-bodysuits-del-bebe-en-un-mockup-azul-del-fondo-3-bebe-crece-la-disposicion-plana-blanco-gris-y-negro-2atkp45.jpg",
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

const ArrayBenefit = ({name, description, image, link}) => {
   /*  const classes =useStyles(); */
    return (
        <React.Fragment>
           
           <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', height:240, borderRadius: 2}} elevation ={12} style={{backgroundImage: `url(${image})`}}>
            <h4 style={{color: "#f5f5f5"}}>{name}</h4>
            <p style={{color: "#f5f5f5"}}>{description}</p>
            <Box  sx={{display: "flex", alignSelf:"flex-end"}}>
           
            <a href="/benefits"> <Button variant="contained" size ="small" style={{background: 'linear-gradient(to right bottom, #f5f5f5)'}} >ver más</Button></a>
           
            </Box>
                  
                </Paper>

        </React.Fragment>
    );
};