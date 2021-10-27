import React from 'react'
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@material-ui/core'
import { Box } from '@mui/system';


export default function CarouselGrowth() {
const allGrowth = [
    {
        name: 'Academia',
        description: 'Plataforma de capacitación gratuita... Encontrarás cursos en 3 idiomas relacionados con Transformación digital, Agilismo entre otros.',
        link:"https://stefanini.konviva.com.br/lms/#/home",
        image:"https://jeshoots.com/wp-content/uploads/2019/10/IMG_3567-728x485.jpg",
    },

    {
        name: 'Acsendo',
        description: 'Plataforma de evaluación de metas colaboradores... Si vives nuestras aptitudes Stefanini este es tu lugar.',
        link:"https://hr.acsendo.com/results/admin ",
        image:"https://jeshoots.com/wp-content/uploads/2019/01/IMG_0628-728x485.jpg",
    },
    
    {
        name: 'Mentoring',
        description: 'Orienta tu crecimiento y desarrollo personal y profesional a manos de nuestros MENTORES.',
        link:"https://mentoring.stefanini.io/#/login",
        image:"https://jeshoots.com/wp-content/uploads/2019/01/IMG_0708-728x485.jpg",
    },


];

return (
    <Carousel>
            {allGrowth.map((growth, i) => (
                <ArrayGrowth key={i} {...growth} />
            ))}
        </Carousel>
);
}

const ArrayGrowth = ({name, description,link, image}) => {
    return (



        <React.Fragment>

<Box   sx={{ p: 2, display: 'flex', flexDirection: 'column'}}>
           
            <h4 style={{color: "#f5f5f5"}}>{name}</h4>
            <p style={{color: "#f5f5f5"}}>{description}</p>
            <a href={link}><Button variant="contained" color="#ef6c00" size ="small" >Acceder</Button></a>
            
                  
                </Box>

        </React.Fragment>
    );
};
