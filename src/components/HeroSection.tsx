import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';


export default function HeroSection() {
  return (
     <Box className='hero-section'>
          <Box className='hero-image'> 
        <Container maxWidth="lg" sx={{display:'flex', justifyContent:'end', alignItems:'center' , height:'100%'}}>
          
              
              <Box sx={{width:'50%'}} className='hero-content'>
               <Typography variant="h1" className='hero-title'>
                  Home Shopping, Your Choice
                 </Typography>
                 <Typography variant="body1" className='hero-pargraph'>
                   Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                   sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
               </Typography>
              </Box>
           </Container>
           </Box>
     </Box>
  )
}
