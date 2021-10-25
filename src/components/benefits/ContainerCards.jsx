import { Grid } from '@mui/material'
import React, { Fragment } from 'react'
import benefits from '../benefits/benefits.json'
import CardBenefits from './CardBenefits'




const ContainerCards = () => {


	return (
   <Fragment> 
	 
    <h1>BENEFICIOS CORPORATIVOS</h1>
    <Grid container spacing={1} justify="center"> 
    {benefits.map(((item) => {
    	return <CardBenefits
    	 title={item.title}
    	 description={item.description}
    	 image={item.image}
    	 text={item.text}
    	 secondaryText={item.secondaryText}
	  />
    }))}
   </Grid>
   </Fragment>
	)
}
export default ContainerCards
