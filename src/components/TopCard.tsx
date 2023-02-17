import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Box from '@mui/material/Box';
import Image from '../assets/Mask group.png'
import '../App.css'
export default function TopCard() {
  return (
    <Card  className='card-top'>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={Image}
                  alt="green iguana"
                  sx={{height:'245px'}}
              />
              <Box sx={{width:'46px' , height:'22px' , borderRadius:'6px' , backgroundColor:'#F6F7FB' ,position: 'absolute', top: '11px', left: '10px'}}>
                     <Typography gutterBottom variant="body2" component="div" sx={{fontSize:'14px' , color:'#F86338', overflow:'hidden'}}>
                      sale
                      
                     </Typography>
              </Box>    
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" sx={{fontWeight:'700' , fontSize:'24px'}}>
                      Tracksuit Hyped
                      
          </Typography>
          
                
          <Typography variant="body2" color="text.secondary" sx={{fontSize:'14px' , color:'#9A9AB0' , marginTop:'8px'}}>
           Apple Cherry
          </Typography>
          <Box>
           <Typography variant="body2" color="text.secondary" sx={{fontSize:'16px' , color:'#F86338' , marginTop:'8px'}}>
           $384
           </Typography>
           <Typography variant="body2" color="text.secondary" sx={{fontSize:'16px' , color:'#9A9AB0' , marginTop:'8px'}}>
           $454
          </Typography>            
          </Box>
          
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
