import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';
import benefits from '../benefits/benefits.json'


const CardBenefits = (props) => {
	
	const { loading = false } = props;

	return (
		<Grid container wrap="nowrap">
		  {(loading ? Array.from(new Array(3)) : benefits).map((item, index) => (
			<Box key={index} sx={{ width: 210, marginRight: 0.5, my: 5 }}>
			  {item ? (
				<img
				  style={{ width: 210, height: 118 }}
				  alt={item.title}
				  src={item.image}
				/>
			  ) : (
				<Skeleton variant="rectangular" width={210} height={118} />
			  )}
	
			  {item ? (
				<Box sx={{ pr: 2 }}>
				  <Typography gutterBottom variant="body2">
					{item.title}
				  </Typography>
				  <Typography display="block" variant="caption" color="text.secondary">
					{item.description}
				  </Typography>
				  <Typography variant="caption" color="text.secondary">
					{`${item.text}  ${item.secondaryText}`}
				  </Typography>
				</Box>
			  ) : (
				<Box sx={{ pt: 0.5 }}>
				  <Skeleton />
				  <Skeleton width="60%" />
				</Box>
			  )}
			</Box>
		  ))}
		</Grid>
	  );
	}
	
	CardBenefits.propTypes = {
	  loading: PropTypes.bool,
	};
	
	export default function YouTube() {
	  return (
		<Box sx={{ overflow: 'hidden' }}>
		  <CardBenefits loading />
		  <CardBenefits />
		</Box>
	  );

}
