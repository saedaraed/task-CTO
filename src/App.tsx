
import { Box, Grid  } from '@mui/material';
import { BrowserRouter, Route , Routes } from "react-router-dom";
import './App.css';
import Home from './screens/Home';
import Details from './screens/Details';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      
    <Box sx={{ flexGrow: 1 }}>
      
        <Routes>
        
       
        <Route path="/" element={ <Home />} />
        <Route path="/details" element={ <Details /> } />

        </Routes>
        
       
      
    </Box>

    </div>
    </BrowserRouter>
  );
}

export default App;
