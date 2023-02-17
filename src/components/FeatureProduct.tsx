import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function FeatureProduct() {
    return (
      <div>
        <Box sx={{display:'flex' , gap:'24px' , justifyContent:'start' , alignItems:'center', marginBottom:'24px'}}>
           <Box sx={{ width: '80px', height: '80px', borderRadius: '8px', backgroundColor:'#E2E2EA'}}>    
                 
                    
           </Box>           
          <Box sx={{textAlign:'left'}}>
             <Typography variant="body2" color="text.secondary" sx={{color:'#11142D' , fontSize:'16px' , fontWeight:'700' }}>
             Tropical Playsuit
             </Typography> 
             <Typography variant="body2" color="text.secondary" sx={{color:'#F3692E' , fontSize:'14px' , marginTop:'8px'  }}>
             $110
             </Typography> 
          </Box>
      </Box>
      </div>
  )
}
