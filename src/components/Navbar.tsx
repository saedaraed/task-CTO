import AddHomeOutlinedIcon from '@mui/icons-material/AddHomeOutlined';
import LibraryBooksOutlinedIcon from '@mui/icons-material/LibraryBooksOutlined';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Box, Paper } from '@mui/material';
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
                <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '20px' }}>

                  <ArrowBackIcon className={isDisplay} onClick={() => navigate(-1)} />
                  <AddHomeOutlinedIcon/>
                  <LibraryBooksOutlinedIcon/>
                </Box>
                <LibraryBooksOutlinedIcon/>
            </Box>
           
        </Paper>
    )
  }