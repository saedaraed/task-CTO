import { Box, Container, Grid } from '@mui/material'
import HeroSection from '../components/HeroSection'
import Navbar from '../components/Navbar'
import Opportunities from '../components/Opportunities'
import Slider from '../components/Slider'
import '../App.css'


export default function Home() {
  return (
    <Box sx={{ flexGrow: 1 }}>
    <Grid container spacing={2}>
      <Grid item xs={1}>
        <Navbar isDisplay='isDisplay'/> 
      </Grid>
      <Grid item xs={11}> 
          <Container maxWidth="lg">
              <HeroSection/>
              <Slider />
              <Opportunities/>
          </Container>
      </Grid>
    </Grid>
    </Box>
  )
}
