import React, { Fragment } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Button } from '@mui/material';
import rhh from './rhh.json';




const RhhCard = ({title, description, image, buttonText, secondaryText,link }) => {
    return (
        <Fragment>
         <Card sx={{ maxWidth: 345, minWidth:230 }}>
		  <CardActionArea>
			<CardMedia
			  component="img"
			  height="230"
			  image={image}
			  alt=""

			/>
			<CardContent>
			  <Typography gutterBottom variant="h5" component="div">
              {title}
			  </Typography>
			  <Typography component="p" variant="h6" color="text.secondary">
              {secondaryText}
			  </Typography>
			  <Typography variant="body2" color="text.secondary">
              <a href={link}>
             <Button variant="contained" style={{background: 'linear-gradient(to right bottom, #301b70, #4527a0,#6a52b3)'}}>
             {buttonText}
             </Button>
             </a>
			  </Typography>
			</CardContent>
		  </CardActionArea>
		</Card>
    </Fragment>
    )
}

export default RhhCard
