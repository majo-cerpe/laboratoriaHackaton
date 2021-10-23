import React from 'react'
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@material-ui/core'


export default function CarouselGrowth() {
const allGrowth = [
    {
        name: 'Academia',
        description: '',
        link:"https://stefanini.konviva.com.br/lms/#/home",
        image:"",
    },

    {
        name: 'Acsendo',
        description: '',
        link:"https://hr.acsendo.com/results/admin ",
        image:"",
    },
    
    {
        name: 'Mentoring',
        description: '',
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
            <h3>{name}</h3>
            <p>{description}</p>
            <a href={link}><Button variant="contained" color="primary" size ="small">Acceder</Button></a>
            
        </React.Fragment>
    );
};