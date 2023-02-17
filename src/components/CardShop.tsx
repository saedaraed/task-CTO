import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import StarIcon from '@mui/icons-material/Star';
import Box from '@mui/material/Box';
import Image from '../assets/Mask group.png'
import '../App.css'
export default function CardShop() {
  return (
    <Card  className='card-shop'>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={Image}
                  alt="green iguana"
                  sx={{height:'245px'}}
              />
              <Box sx={{width:'27px' , height:'22px' , borderRadius:'6px' , backgroundColor:'#FFDDD3' ,position: 'absolute', top: '11px', left: '90%'}}>
                  <FavoriteBorderIcon sx={{ color: '#F3692E' }} />  
              </Box>    
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" sx={{fontWeight:'700' , fontSize:'24px'}}>
            Urbano Jacket
          </Typography>
          
                  <Box sx={{display:'flex' , justifyContent:'center'}}>
                      <StarIcon  className='start-color'/>
                      <StarIcon className='start-color'/>
                      <StarIcon className='start-color'/>
                      <StarIcon className='start-color'/>
                      <StarIcon className='start-color'/>
                  </Box>  
          <Typography variant="body2" color="text.secondary" sx={{fontSize:'14px' , color:'#9A9AB0' , marginTop:'8px'}}>
           whatchmenow
          </Typography>
           <Typography variant="body2" color="text.secondary" sx={{color:'#F3692E' , fontSize:'16px' , marginTop:'8px' }}>
           99$
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
