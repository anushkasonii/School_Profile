import React from 'react';
import { Box, Grid } from '@mui/material';

import img1 from '../Images/img1.jpg';
import img2 from '../Images/img2.jpeg';
import img3 from '../Images/img3.jpg';
import img4 from '../Images/img4.jpg';
import img5 from '../Images/img5.jpg';
import img6 from '../Images/img6.jpg';



const ImageBox = () => {

    const images = [img1, img2, img3, img4, img5, img6];
  
    return (
      <Grid container spacing={1.2} sx={{ mt: 0.5 }}>
        {images.map((image, index) => (
          <Grid item xs={1} sm={1} md={2} key={index}>
            <Box 
              sx={{ 
                width: '100%', 
                height: '180px', 
                backgroundColor: '#f0f0f0', 
                border: '1px solid #f0f0f0', 
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                borderRadius: '4px', 
                overflow: 'hidden',
              }}
            >
              <img 
                src={image} 
                alt={`Gallery Image ${index + 1}`} 
                style={{ 
                  width: '100%', 
                  height: '100%', 
                  objectFit: 'cover' 
                }} 
              />
            </Box>
          </Grid>
        ))}
      </Grid>
    );
  };
  
  export default ImageBox;