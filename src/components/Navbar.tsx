import AddHomeOutlinedIcon from '@mui/icons-material/AddHomeOutlined';
import LibraryBooksOutlinedIcon from '@mui/icons-material/LibraryBooksOutlined';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Box, IconButton, Paper, Tooltip, Typography } from '@mui/material';
import { useNavigate} from 'react-router-dom';
import '../App.css'

interface displayProps{
    isDisplay?:string
}
export default function Navbar({isDisplay}:displayProps) {
      const navigate = useNavigate();

    return (
        <Paper elevation={3}>
            <Box className='navbar' >
                <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '50px' }}>

                  <ArrowBackIcon className={isDisplay} onClick={() => navigate(-1)} />
                  <AddHomeOutlinedIcon/>
            <LibraryBooksOutlinedIcon sx={{ color:'#9C4DE2' }} />
                </Box>
                 <Tooltip title="Open settings" sx={{backgroundColor:'red!important'}} >
                 <IconButton sx={{ p: 0 ,backgroundColor:'#1D4ED8!important' , width:'45px', height:'45px' , display:'flex' , justifyContent:'center' , alignItems:'end'}}>
                <Typography variant="button" display="block" gutterBottom sx={{fontSize:"20px" , color:'#fff' , fontWeight:'bold'}}>
                        nt
                     </Typography>
              </IconButton>
            </Tooltip>
            </Box>
           
        </Paper>
    )
  }