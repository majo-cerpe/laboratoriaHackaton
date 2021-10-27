import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';



const CardBenefits = ({title, description, image, text, secondaryText }) => {
	


	return (
		<Card sx={{ maxWidth: 345 }}>
		  <CardActionArea>
			<CardMedia
			  component="img"
			  height="140"
			  image={image}
			  alt=""
			/>
			<CardContent>
			  <Typography gutterBottom variant="h5" component="div">
				{title}
			  </Typography>
			  <Typography component="p" variant="h6" color="text.secondary">
				{description}
			  </Typography>
			  <Typography variant="body2" color="text.secondary">
				{text}. {secondaryText}
			  </Typography>
			</CardContent>
		  </CardActionArea>
		</Card>
	  );

}
export default CardBenefits