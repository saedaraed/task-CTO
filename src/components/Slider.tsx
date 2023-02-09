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

import { useDispatch , useSelector } from "react-redux";
import {fetchProduct} from '../store/productSlice'
import { useEffect } from "react";
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
  const { isLoading, products } = useSelector((state: any) => state.products)
  console.log('data' , products)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch<any>(fetchProduct())
  }, [dispatch])
  return (
      <>
      <Grid className='slider-parent flex' >
         <Typography component="div" variant="h6" sx={{fontSize:'30px' , fontWeight:'bold', marginLeft:'40px'}}>
             You have applied for
          </Typography>
           <Link href="#" sx={{color:'#8528C8' , fontSize:'20px', textDecoration:'none' , fontWeight:'bold'}}>View interview request</Link>       
      </Grid>
          <Box >
        {isLoading ? ('loading..') : (
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
              {products.map((info:any) => {
                  return (
                      <SwiperSlide key={info.id}> <CardApplied title={info.title} image={info.url} link={info.thumbnailUrl}/> </SwiperSlide>  
                  )
              })}
        
       
              </Swiper>
          
       )} 
              </Box>
    </>
  );
}
