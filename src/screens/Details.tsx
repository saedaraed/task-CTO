import { Box, Button, Container, Grid } from "@mui/material"
import Navbar from "../components/Navbar"
import ButtonCom from "../components/ButtonCom"
import Typography from "@mui/material/Typography"
import '../App.css';

export default function Details() {
    return (
    < Box sx={{ flexGrow: 1 }}>
     <Grid container spacing={2}>
      <Grid item xs={1}>
        <Navbar/> 
      </Grid>
      <Grid item xs={11}> 
            <Container maxWidth="lg" sx={{ textAlign: 'left' }}>
              <Box sx={{width:'70%'}}>

              <Typography  variant="h1" gutterBottom sx={{fontSize:'30px' ,  marginBottom:'20px', fontWeight:'bold', marginTop:'100px'}}>
                User Experience Intern
                </Typography>
                <Box sx={{display:'flex', gap:'10px' , flexWrap:'wrap' , margin:'30px 0px'}}>
                  <Button variant="outlined" sx={{ borderRadius: '100px' }}>+ UI</Button>
                  <Button variant="outlined" sx={{borderRadius:'100px'}}>+ Social Media </Button>
                  <Button variant="outlined" sx={{borderRadius:'100px'}}>+ UI</Button>
                  <Button variant="outlined" sx={{ borderRadius: '100px' }}>+ Social Media </Button>
                  <Button variant="outlined" sx={{ borderRadius: '100px' }}>+ UI</Button>
                  <Button variant="outlined" sx={{borderRadius:'100px'}}>+ Graphic Design </Button>
                  <Button variant="outlined" sx={{borderRadius:'100px'}}>+ UI</Button>
                  <Button variant="outlined" sx={{borderRadius:'100px'}}>+ Graphic Design </Button>
                </Box>
               <Typography variant="body1" gutterBottom>
                  London is a perfect internship spot for keeping a cultural hub of diversity and opportunity as its central pedestal. Our associated companies span from large multinationals to start-ups working on cutting-edge technology. Whether you're looking to build your career or learn crucial skills to take away, our list of London firms have plenty to offer, and with so much under the belt for what this city has to offer, there's certainly no room for boredom. 
               </Typography>
                <ul>
                  <li>

                    On-Job Training: The program is designed to enrich the participant's knowledge and provide them with the skills needed in this early stage of their career to be ready for their professional lives.
                  </li>
                  <li>
                    Program Name: Future Gears
                  </li>
                   <li>Program Duration: 6 Months</li>
                </ul>
                <Typography variant="h4" gutterBottom sx={{fontSize:'20px' , fontWeight:'bold',   marginBottom:'20px' , textDecoration:'line'}}>
                Industries covered
                </Typography>
                <Typography variant="body1" gutterBottom>
                  Law, Investment Banking, Management Consulting, Marketing, IT and Journalism are some of the 25+ different sectors we provide internships in.
                </Typography>
                <ButtonCom isWidth='button-details'/>
                </Box>
          </Container>
      </Grid>
     </Grid>
    </Box>
    )
  }