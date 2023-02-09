import { Avatar, Box, Card, CardContent, CardMedia, Grid, Link, Paper, Typography } from '@mui/material'
import Image from '../../assets/image 181.png'

interface PropsApplied{
    title:string
    image:string
    link:string
}

export default function CardApplied({title , image , link}:PropsApplied) {
  return (
      <Paper  elevation={3} sx={{ display: 'flex' , alignItems:'center', justifyContent:'space-between',  borderRadius:'20px' , padding:'30px 0px 0px 30px' , margin:'30px 10px 10px', height:'168px' }}>
        <CardMedia
        component="img"
        sx={{ width: '30px' , height:'auto'}}
        image={image}
        alt="img"
              />
    
      <Box sx={{height:'100%' , width:'226px'}}>
        <CardContent sx={{  textAlign:'left' , display:'flex', flexDirection:'column', justifyContent:'space-between',height:'100%' , margin:'0px', padding:'0px'}}>
            <Grid>
              <Typography component="div" variant="h6" sx={{paddingRight:'30px', fontSize:'15px' , fontWeight:'bold'}}>
            {title}
              </Typography>
              <Link href={link}>name</Link>
            </Grid>
             <Box sx={{backgroundColor:'#8528C8' ,borderBottomRightRadius:'20px', padding:'5px 15px'}}>
             <Typography component="div" variant="h6" sx={{fontSize:'14px' , fontWeight:'bold', color:'#fff'}}>
                Applied
             </Typography>
             </Box>
         
        </CardContent>
        
       </Box>
      
    </Paper>
  )
}
