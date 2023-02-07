import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Mousewheel, Keyboard } from "swiper";
import CardApplied from "./CardApplied";
import { Box, Grid, Link, Typography } from "@mui/material";
import ImageOne from '../assets/image 181.png'
import ImageTwo from '../assets/image 314.png'
import ImageThree from '../assets/STC.png'
import '../App.css'

const data = [{
        id: 1,
        title: "Marketing and Business Development Intern",
        link:"SaaSLeads",
        state: "Applied",
        image: ImageOne,
    },
    {
           id: 2,
        title: "UI/UX Intern",
        link:"Google",
        state: "Shortlisted",
        image: ImageTwo,
    },
    {
        id: 3,
        title: "Saudi Telecom company",
        link:"STC",
        state: "Applied",
        image: ImageThree,
    },
     {
        id: 4,
        title: "Marketing and Business Development Intern",
        link:"SaaSLeads",
        state: "Applied",
        image: ImageOne,
    },
];
export default function Slider() {
  return (
      <>
      <Grid className='slider-parent flex' >
         <Typography component="div" variant="h6">
             You have applied for
          </Typography>
           <Link href="#" sx={{color:'#8528C8' , fontSize:'20px', textDecoration:'none' , fontWeight:'bold'}}>View interview request</Link>       
      </Grid>
          <Box sx={{marginTop:'30px'}}>
        <Swiper 
     
                   breakpoints={{
 
    640: {
      
      slidesPerView: 1,
    },

    768: {
      width: 768,
      slidesPerView: 2,
                      },
     992: {
      
      slidesPerView: 2,
                      },
      1180: {
      
      slidesPerView: 3,
    }
  }}
        spaceBetween={30}
        cssMode={true}
        navigation={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Mousewheel, Keyboard]}
        className="mySwiper"
         >
              {data.map((info) => {
                  return (
                      <SwiperSlide key={info.id}> <CardApplied title={info.title} image={info.image} state={info.state} link={info.link}/> </SwiperSlide>  
                  )
              })}
        
       
              </Swiper>
              </Box>
    </>
  );
}
