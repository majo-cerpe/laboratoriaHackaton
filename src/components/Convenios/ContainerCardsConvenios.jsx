import { Grid } from "@mui/material";
import React, { Fragment } from "react";
import CardConvenios from "./CardConvenios";
import convenios from "./convenios.json";
import Box from '@mui/material/Box';



const ContainerCards = () => {

	return (
		<Fragment>
			<h2>Convenios Corporativos</h2>
			<Grid container spacing={1} justify="center">
				{convenios.map((item) => {
					return (
						<Box
							sx={{ mt: 2, mb: 2, mx: 3 }} display="flex" justifyContent="center"
						>
							<CardConvenios
								title={item.title}
								description={item.description}
								image={item.image}
								text={item.text}
								secondaryText={item.secondaryText}
							/>
						</Box>
					);
				})}
			</Grid>
		</Fragment>
	);
}


export default ContainerCards;
