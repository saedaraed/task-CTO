import { Box, CardMedia, Link, Typography } from '@mui/material'
import Button from './ButtonCom'
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
        <CardMedia
        component="img"
        sx={{ width: 'auto' , height:'50px' }}
        image={image}
        alt="img"
          /> 
          <Box>
           <Typography component="div" variant="h6">
            {title}
           </Typography>
              <Link href="#">{link }</Link>
              <Box sx={{display:'flex' , gap:'10px'}}>
                  <Typography component="div"  variant="caption" display="block" >
                      {location}
                  </Typography> 
                  <Box>
                   <Typography component="div" variant="button"  display="block" >
                      Type of work
                  </Typography> 
                  <Typography component="div"  variant="caption" display="block" >
                      {typework}
                  </Typography> 
                  </Box>
              </Box>
            
          </Box>
        <Box><Button linTo={`/details`  } /></Box>
              
           
      </Box>
      <hr />
      </>
  )
}
