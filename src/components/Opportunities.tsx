import { Paper, Typography } from '@mui/material'
import ImageOne from '../assets/2222 2.png'
import ImageTwo from '../assets/image 181.png'
import CardOpportunity from './CardOpportunity';
const data = [{
        id: 1,
        title: "Marketing and Business Development Intern",
        link:"SaaSLeads",
        image: ImageOne,
        location:"London, England, United Kingdom",
        typework :'remote'
    },
    {
           id: 2,
        title: "Marketing and Business Development Intern",
        link:"Google",
        image: ImageTwo,
        location:"London, England, United Kingdom",
        typework :'remote'

    },
   
];
export default function Opportunities() {
    return (
        <>
             <Typography className='slider-title' component="div" variant="h6" sx={{margin:'80px 0px 0px' , textAlign:'left'}}>
             Open opportunities             </Typography>
            <Paper className='card-opp' elevation={3} sx={{padding:'40px 65px' , borderRadius:'20px', margin:'30px 0px'}} >
                {data.map((index) => {
                    return (
                        <CardOpportunity key={index.id} title={ index.title} image={index.image} link={index.link} location={index.location} typework={index.typework}/> 
                    )
                })}
               
            </Paper>
        </>
  
  )
}
