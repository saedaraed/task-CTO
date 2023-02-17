import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Image from '../assets/Group 18.svg'
export default function JoinCard() {

    const [email, setEmail] = useState<string>('')
    const handleChange :React.ChangeEventHandler<HTMLInputElement>= ({target:{value}}) => {
    setEmail(value);
    
    }
    return (
      <Container maxWidth="lg">
    <Box className='join-style'>
          <Typography variant="h2" gutterBottom className='title-join'>
              Join Our News Letters
          </Typography>
          <Typography variant="body1" gutterBottom className='par-join'>
              Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster 
          </Typography>
          <Box className='input-email'>
                    <input type="email" placeholder='Insert your mail here' value={email} onChange={handleChange} />
                    <Button variant="contained" className='button-join'><img src={Image} alt="" /></Button>

          </Box>
            </Box>
            </Container>
  )
}
