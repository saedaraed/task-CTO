import CardCategory from '../components/CardShop'
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Sidebar from '../components/Sidebar'
import HeroSection from '../components/HeroSection'
import TopNav from '../components/TopNav';
import Navbar from '../components/Navbar';
export default function Shop() {
  return (
    <div>
      <TopNav />
      <Navbar/>
          <HeroSection/>
          <Container maxWidth="lg">
             <Box className='shop-parent' sx={{display:'flex' , marginTop:'120px!important' }}>
              <Box >
                  <Sidebar/>
              </Box>
              <Box sx={{display:'flex' , flexWrap:'wrap' , gap:'16px'}}>
                  <CardCategory /> 
                  <CardCategory /> 
                  <CardCategory /> 
                  <CardCategory /> 
                  <CardCategory /> 
                  <CardCategory /> 
                  <CardCategory /> 
                  <CardCategory /> 
              </Box>
             </Box>
          </Container>
    </div>
  )
}
