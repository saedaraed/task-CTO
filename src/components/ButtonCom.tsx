import { Link } from "react-router-dom";
import Button from '@mui/material/Button';

interface styleProps{
  isWidth?: string
  linTo?:any
}
export default function ButtonCom({isWidth , linTo}:styleProps) {
  return (
    // <Button variant="contained">Apply Now</Button>
    <Link to = {linTo} > <Button variant="contained" className={isWidth} sx={{backgroundColor:'#22215B' , width:'233px' , height:'71px'}}> Apply now
    </Button></Link>


  )
}