import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function Footer() {
    return (
        <Box className="footer">
            <Container maxWidth="lg">
                <Box className='flex footer-style' sx={{gap:'56px'}}>
                    <Box className='foter-left'>
                  
                    </Box>
                    <Box className='foter-right'>
                        <Box>
                   <Typography variant="h3" gutterBottom className='logo-footer'>
                     Dealerz.
                   </Typography>
                   <Typography variant="body1" gutterBottom>
                      Privacy Policy
                   </Typography>
                    <Typography variant="body1" gutterBottom>
                     Terms and Condition
                            </Typography>
                            </Box>
                    <Typography variant="body1" gutterBottom>
                    @2020 TanahAir Studio. All rights reserved.
                    </Typography>
                    </Box>
                </Box>
            </Container>
        </Box>    
  )
}
