import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { Navigation } from "swiper";
import Container from '@mui/material/Container';
import '../App.css'
export default function SellerSlider() {
  return (
      <>
    <Container maxWidth="lg">
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
                      <Box className='slider-content'>
                          <Box className='slider-content-left'>
                              
                          </Box>
                          <Box className='slider-content-right'>
                             <Typography variant="h2" gutterBottom className="slider-content-right-title">
                              Good Seller!
                              </Typography>
                               <Typography variant="body1" gutterBottom className="slider-content-body">
                                I am very happy with the services provided, it is very helpful, starting
                                from the insight that the company gave from the start that I did not
                                understand what it was so I got knowledge and made my website
                                look better
                              </Typography>
                              <Typography variant="h2" gutterBottom className="slider-content-right-fote">
                                  Anna Saraspova
                              </Typography>
                              <Typography variant="body1" gutterBottom className="slider-content-right-end">
                                  Your Beloved Buyer
                              </Typography>
                          </Box>
                      </Box>            
        </SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
       
      </Swiper>
    </Container>
    </>
  );
}
