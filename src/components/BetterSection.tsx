import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import BetterCard from './BetterCard';
import Typography from '@mui/material/Typography';

export default function BetterSection() {
    return (
        <Container maxWidth="lg">
            <Box className='betterSection-parent'>
               <Typography variant="h2" gutterBottom className='betterSection-title'>
                   Get Better Insights from Our Articles
                </Typography> 
                <Typography variant="body1" gutterBottom className='betterSection-link'>
                   See more
                </Typography> 
            </Box>
  
             <Box className='betterSection-style'>
                <BetterCard />
                <BetterCard />
                <BetterCard />
                <BetterCard/>
            </Box>
            </Container>
  )
}
