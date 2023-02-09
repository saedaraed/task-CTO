import { Paper, Typography } from '@mui/material'
import ImageOne from '../assets/image 181.png'
import ImageTwo from '../assets/image 314.png'
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
             <Typography component="div" variant="h6" sx={{margin:'80px 0px' , textAlign:'left' ,fontSize:'30px' , fontWeight:'bold'}}>
             Open opportunities             </Typography>
            <Paper elevation={3} sx={{padding:'30px'}} >
                {data.map((index) => {
                    return (
                        <CardOpportunity key={index.id} title={ index.title} image={index.image} link={index.link} location={index.location} typework={index.typework}/> 
                    )
                })}
               
            </Paper>
        </>
  
  )
}
