import * as React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import image from './momentos.json'; 



const Photos = () => {
    return (
<Box  sx={{ ml:11 }} alignItems="center">
      <ImageList variant="masonry" cols={2} gap={15}>
        {image.map((post) => (
          <ImageListItem key={post.image}>
            <img
              src={`${post.image}?w=248&fit=crop&auto=format`}
              srcSet={`${post.image}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={post.title}
              loading="lazy"
              
            />
            <ImageListItemBar position="below" title={post.description} />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
    )
}

    
        



export default Photos