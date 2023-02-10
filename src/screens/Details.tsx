import { Box, Button, Container, Grid } from "@mui/material"
import Navbar from "../components/Navbar"
import ButtonCom from "../components/ButtonCom"
import Typography from "@mui/material/Typography"
import AddIcon from '@mui/icons-material/Add';
import Icon from '../assets/Group 315.png'
import '../App.css';
import Link from "@mui/material/Link";

export default function Details() {
    return (
    < Box sx={{ flexGrow: 1 }}>
     <Grid container spacing={2}>
      <Grid item xs={2} sm={1} md={1}>
        <Navbar/> 
      </Grid>
      <Grid item xs={10} sm={11} md={11}> 
            <Container maxWidth="lg" sx={{ textAlign: 'left' }}>
              <Box className='details-content' sx={{width:'70%'}}>

              <Typography className='title-details'  variant="h1" gutterBottom >
                User Experience Intern
                </Typography>
                <Box sx={{ display: 'flex', gap: '10px', flexWrap: 'wrap', margin: '40px 0px' }}>
                  
                  <Button className="button-style" variant="outlined" > <img src={Icon} alt="" /> UI</Button>
                  <Button className="button-style" variant="outlined" > <img src={Icon} alt="" />  Social Media </Button>
                  <Button className="button-style" variant="outlined"> <img src={Icon} alt="" />  UI</Button>
                  <Button className="button-style" variant="outlined" > <img src={Icon} alt="" />  Social Media </Button>
                  <Button className="button-style" variant="outlined" > <img src={Icon} alt="" />  UI</Button>
                  <Button className="button-style" variant="outlined" > <img src={Icon} alt="" />  Graphic Design </Button>
                  <Button className="button-style" variant="outlined" > <img src={Icon} alt="" />  UI</Button>
                  <Button className="button-style" variant="outlined" > <img src={Icon} alt="" />  Graphic Design </Button>
                </Box>
               <Typography className='par-details' variant="body1" gutterBottom sx={{fontSize:'20px'}}>
                  London is a perfect internship spot for keeping a cultural hub of diversity and opportunity as its central pedestal. Our associated companies span from large multinationals to start-ups working on cutting-edge technology. Whether you're looking to build your career or learn crucial skills to take away, our list of London firms have plenty to offer, and with so much under the belt for what this city has to offer, there's certainly no room for boredom.
               </Typography>
                <ul className='par-details' style={{fontSize:'20px' , marginTop:'40px'}}>
                  <li>

                    On-Job Training: The program is designed to enrich the participant's knowledge and provide them with the skills needed in this early stage of their career to be ready for their professional lives.
                  </li>
                  <li>
                    Program Name: Future Gears
                  </li>
                   <li>Program Duration: 6 Months</li>
                </ul>
                <Link className='par-details' href="#" color="inherit" sx={{fontSize:'20px' , fontWeight:'bold',   marginBottom:'40px' , textDecoration:'line' , color:'000!important'}}>
                Industries covered
                </Link>
                <Typography className='par-details' variant="body1" gutterBottom style={{fontSize:'20px' , marginTop:'40px'}}>
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