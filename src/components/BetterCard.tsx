import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Link from '@mui/material/Link';

import '../App.css'

export default function BetterCard() {
  return (
    <Card className='better-card'>
      <CardActionArea>
        <CardMedia
          component="img"
          height="416"
          image="/static/images/cards/contemplative-reptile.jpg"
                  alt="green iguana"
                  sx={{backgroundColor:'#E2E2EA'}}
        />
        <CardContent>
          <Typography gutterBottom variant="h4" component="div" className='betterCard-title'>
            Best Summer Outfit Style
          </Typography>
          <Typography variant="body1" className='betterCard-paragraph'>
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                  </Typography>
       <Link href="#" variant="body2" className='betterCard-link'>
        Explore More
      </Link>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
