import FeatureProduct from './FeatureProduct'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import priceVector from '../assets/Vector (5).png'

import ProductCategory from './ProductCategory'
import Price from './Price'

export default function Sidebar() {

  return (
    <div className='sidebar'>
       <Box >
      <Typography className='title-shop-cat' variant="h5" gutterBottom sx={{display:'flex', justifyContent:'space-between' , alignItems:'center'}} >
       Price
       <img src={priceVector} alt="" />
      </Typography>
        
        <Price/>
      </Box>
      <Box sx={{margintTop:'70px'}}>
      <Typography className='title-shop-cat' variant="h5" gutterBottom >
       Product Categories
      </Typography>
        <ProductCategory/>
      </Box>
      <Box sx={{marginTop:'70px'}}>
      <Typography className='title-shop-cat' variant="h5" gutterBottom >
       Featured Product
      </Typography>
      <FeatureProduct />
      <FeatureProduct />
      <FeatureProduct />
        <FeatureProduct />
      </Box>
      </div>
  )
}
