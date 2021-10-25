import { Grid } from '@mui/material'
import React, { Fragment } from 'react'
import CardBenefits from './CardBenefits'


import { collection, getDocs } from "firebase/firestore";
import app from './../../firebase'
import db from './../../firebase'





const ContainerCards = () => {

const [task, setTask] = React.useState([])

React.useEffect(() => {

const getData =  async () => {
	try {

	const data = await getDocs(collection(app, "benefits"));
	data.forEach((doc) => {
	  console.log(`${doc.id} => ${doc.data()}`);
	});

}catch (error) {
		console.log(error);
	}
}
getData()
}, [])

		return (
			<Fragment> 
			 <h1>BENEFICIOS CORPORATIVOS</h1>
			 <Grid container spacing={1} justify="center"> 
			 {task.map(((item) => {
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
