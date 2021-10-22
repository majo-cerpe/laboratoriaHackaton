import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const CardBenefits = () => {
	return (
		<Card sx={{ maxWidth: 345 }}>
		  <CardActionArea>
			<CardMedia
			  component="img"
			  height="140"
			  image="https://st2.depositphotos.com/1177973/6086/i/600/depositphotos_60867841-stock-photo-delicious-chocolate-cake-on-plate.jpg"
			  alt="cumpleaños"
			/>
			<CardContent>
			  <Typography gutterBottom variant="h4" component="div">
				CUMPLEAÑOS
			  </Typography>
			  <Typography gutterBottom variant="h6" component="div">
			  1/2 DÍA LIBRE 
			  </Typography>
			  <Typography variant="body2" color="text.secondary">
			  Si tu cumpleaños cae fin de semana o feriado, puedes tomar la tarde dentro del mes
			  </Typography>
			  <Typography variant="body4" color="text.secondary">
			  No acumulable. Previo acuerdo con tu Lider. No puede afectar la operación del negocio.
			  </Typography>
			</CardContent>
		  </CardActionArea>
		</Card>
	  );
}

export default CardBenefits
