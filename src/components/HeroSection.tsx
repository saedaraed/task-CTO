import { Box, Card, CardContent, CardMedia, Grid, Link, Typography } from "@mui/material";
import Image from '../assets/Mask group.png'
import ImageTwo from '../assets/image 317.png'
import '../App.css';

export default function HeroSection() {
  return (
      <div>
         
          <Box className='hero-parent flex' >
              <Box className='hero-parent-left'>
                  
                
                 <Typography className="title-hero" variant="h1" gutterBottom >
                   Program opportunities and application status 
                 </Typography>
                  <Typography className="par-hero" variant="subtitle1" gutterBottom>
                   Now that you have received conditional offer to the program, you can start applying for the opportunities below. <Link sx={{color:'#000', fontWeight:'bold' , textDecoration:'none'}}>There is a limit on how many you can apply.</Link>  There will be further interviews with the company if you have been shortlisted by them.
                  </Typography>
              </Box>
              <Box className='hero-parent-right'> 
                 
                  <Card className='card' >
                      {/* <CardMedia
                         image={Image}
                         title="green iguana"/> */}
                         <img src={Image} alt="" />
                      <CardContent>
                          <Grid sx={{
                              display: 'flex', justifyContent: 'space-between', alignItems:'center'}}>
                              <Typography gutterBottom variant="h5" component="div" sx={{fontSize:'24px' , fontWeight:'bold'}}>
                              Virtual work experince
                              </Typography>
                              <img src={ImageTwo} />
                          </Grid>
                          <Grid sx={{display:'flex' , gap:'10px', justifyContent:'space-between' , textAlign:'left' , fontWeight:'bold'}}>
                            <Box>  <Typography className="weightFont" component="div"  variant="caption" display="block" >
                            Riyadh, <br />  Saudi Arabia

                            </Typography> </Box>
                            <Box>
                              <Box sx={{marginBottom:'10px'}}>
                                <Typography className="weightFont" component="div"  variant="caption" display="block" >
                                  Application open
                                </Typography>
                               <Typography className="weightFont" component="div"  variant="caption" display="block" >
                                   13 Jan 2023
                                </Typography>
                              </Box>
                              <Box sx={{marginBottom:'10px'}}>
                                <Typography className="weightFont" component="div"  variant="caption" display="block" >
                                   Programme type
                                </Typography>
                               <Typography className="weightFont" component="div"  variant="caption" display="block" >
                                   Internship
                                </Typography>
                              </Box>
                              <Box sx={{marginBottom:'10px'}}>
                                <Typography className="weightFont" component="div"  variant="caption" display="block" >
                                   Programme
                                </Typography>
                               <Typography className="weightFont" component="div"  variant="caption" display="block" >
                                   13 Jan 2023
                                </Typography>
                              </Box>
                            
                            </Box>
                            <Box>
                            <Box sx={{marginBottom:'10px'}}>
                                <Typography className="weightFont" component="div"  variant="caption" display="block" >
                                   Application close
                                </Typography>
                               <Typography className="weightFont" component="div"  variant="caption" display="block" >
                                   01 March 2023
                                </Typography>
                              </Box>
                              <Box sx={{marginBottom:'10px'}}>
                                <Typography className="weightFont" component="div"  variant="caption" display="block" >
                                    Duration
                                </Typography>
                               <Typography className="weightFont" component="div"  variant="caption" display="block" >
                                   6 weeks
                                </Typography>
                              </Box>
                            </Box>
                          </Grid>
                           
                       </CardContent>
                    
                  </Card>
              </Box>
          </Box>
     </div>
  )
}
