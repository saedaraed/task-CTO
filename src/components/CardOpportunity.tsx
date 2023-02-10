import { Box, CardMedia, Link, Typography } from '@mui/material'
import Button from './ButtonCom'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import '../App.css'
interface PropOpportunity{
    title:string
    image:string
    link:string
    location:string
    typework:string
}
export default function CardOpportunity({title , image, link , location , typework}:PropOpportunity) {
  return (
    <>
      <Box className='card-opport flex' >
        <Box sx={{width:'25%' , display:'flex' , justifyContent:'center'}}>
        <CardMedia
        component="img"
        sx={{ width: 'auto' , height:'50px' }}
        image={image}
        alt="img"
          /> 
          </Box>
          <Box className='part-card' >
           <Typography component="div" variant="h6" sx={{fontSize:'15px' , fontWeight:'bold'}}>
            {title}
           </Typography>
            <Link href="#" sx={{fontSize:'12px'}}>{link }</Link>
          <Box className=' part-card-two' sx={{ display: 'flex', gap: '10px' , marginTop:'20px'}}>
            <Box sx={{display:'flex' , width:'50%'}}>
              <LocationOnIcon sx={{fontSize:'12px', marginTop:'3px'}} />
              <Typography component="div"  variant="caption" display="block" sx={{fontSize:'10px'}}>
                      {location}
              </Typography> 
            </Box>
                  
                  <Box sx={{width:'50%'}}>
                    <Typography component="div" variant="caption"  display="block" sx={{fontSize:'10px', fontWeight:'bold'}} >
                      Type of work
                    </Typography> 
                    <Typography component="div"  variant="caption" display="block" sx={{fontSize:'10px'}}>
                      {typework}
                     </Typography> 
                  </Box>
              </Box>
            
        </Box>
        <Box sx={{width:'25%'}}></Box>
        <Box className='part-card '><Button  linTo={`/details`  }  /></Box>
              
           
      </Box>
      <Box className="line-style" ></Box>
      </>
  )
}
