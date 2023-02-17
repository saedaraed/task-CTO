import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Icon1 from '../assets/Vector (6).png'
import Icon2 from '../assets/Vector (7).png'
export default function TopNav() {
  return (
      <Box className='top-nav'>
       <Container maxWidth="lg" className='top-nav-style'>
         <Typography variant="h3" gutterBottom className='logo'>
           Dealerz.
         </Typography>
              
        <Box className='flex' sx={{gap:'34px'}}>
           <Box className='flex' sx={{gap:'10px'}}>
               <img src={Icon1} alt="" />
               <Typography variant="body1" gutterBottom>Call Center</Typography>
                  
           </Box>   
           <Box className='flex' sx={{gap:'10px'}}>
                <img src={Icon2} alt="" />   
                <Typography variant="body1" gutterBottom>Shipping & Returns</Typography>
           </Box>        
        </Box>
       </Container>
      </Box>
  )
}
