import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import IconCardPath from '../assets/Button.svg'
import Box from '@mui/material/Box';
import '../App.css'
export default function CardCategory() {
  return (
         <Card className='cardcat-style' >
      <CardActionArea>
        <CardMedia
          component="img"
          height="400"
          image="/static/images/cards/contemplative-reptile.jpg"
          alt="green iguana"
        />
        <CardContent sx={{padding:'0px 40px'}}>
          <Typography gutterBottom variant="h6" component="div" sx={{fontSize:'16px' , textAlign:'left'}}>
            Category Dress
          </Typography>
         <Typography variant="h2" gutterBottom sx={{fontSize:'48px' , fontWeight:'700' , textAlign:'left'}}>
          Tropical Suit
         </Typography>
         <Box sx={{display:'flex', justifyContent:'start' , marginTop:'32px'}}>
              <img src={IconCardPath} alt="" />         
         </Box>
        
        </CardContent>
      </CardActionArea>
    </Card>
  )
}
