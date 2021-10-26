import React from 'react'
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@material-ui/core'


export default function CarouselGrowth() {
const allGrowth = [
    {
        name: 'Academia',
        description: 'Encuentra cursos y capacitaciones. ',
        link:"https://stefanini.konviva.com.br/lms/#/home",
        image:"",
    },

    {
        name: 'Acsendo',
        description: 'Evaluación de metas de colaboradores que se destaquen por vivir nuestras aptitudes de Stefanini.',
        link:"https://hr.acsendo.com/results/admin ",
        image:"",
    },
    
    {
        name: 'Mentoring',
        description: 'Más de 100 mentores, en 3 idiomas y 14 tópicos diferentes.',
        link:"https://mentoring.stefanini.io/#/login",
        image:"",
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

const ArrayGrowth = ({name, description,link}) => {
    return (
        <React.Fragment>
            <h4 style={{color: "#f5f5f5"}}>{name}</h4>
            <p style={{color: "#f5f5f5"}}>{description}</p>
            <a href={link}><Button variant="contained" color="#ef6c00" size ="small" >Acceder</Button></a>
            
        </React.Fragment>
    );
};
