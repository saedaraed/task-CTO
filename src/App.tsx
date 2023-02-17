
import { Box} from '@mui/material';
import { BrowserRouter, Route , Routes } from "react-router-dom";
import './App.css';

import Shop from './screens/Shop';
import Gallery from './screens/Gallery';
import Home from './screens/Home';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      
     {/* <Box sx={{ flexGrow: 1 }}> */}
      
        <Routes>
        
       
        <Route path="/" element={ <Home /> } />
        <Route path="/shop" element={ <Shop /> } />
        <Route path="/gallery" element={ <Gallery />} />
        </Routes>
        
       
      
     {/* </Box>  */}
      

    </div>
     </BrowserRouter>
  );
}

export default App;
