import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Image1 from '../assets/Combined Shape.png'
import Image2 from '../assets/Combined Shape2.png'
import Image3 from '../assets/Combined Shape3.png'
import Image4 from '../assets/Combined Shape4.png'
import Image5 from '../assets/Combined Shape5.png'
import Image6 from '../assets/Combined Shape6.png'

export default function Acheivement() {
  return (
      <Container maxWidth="lg">
          <Typography variant="h2" gutterBottom className='acheivement-title'>
                     Our Achievement
          </Typography>
          <Box className='acheivement-image'>
              <img src={Image1} alt="" />
              <img src={Image2} alt="" />
              <img src={Image3} alt="" />
              <img src={Image4} alt="" />
              <img src={Image5} alt="" />
              <img src={Image6} alt="" />
          </Box>
      </Container>
  )
}
