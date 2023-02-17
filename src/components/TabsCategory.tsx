import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Container from '@mui/material/Container';
import CardCategory from './CardCategory';
import Typography from '@mui/material/Typography';
interface titleProps{
  title:string
}
export default function TabsCategory({title}:titleProps) {
  const [value, setValue] = React.useState('1');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Container maxWidth="lg">
      <Typography variant="h2" gutterBottom sx={{fontSize:'48px' , fontWeight:'700' , marginTop:'120px'}}>
        {title}
      </Typography>
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box className='tab-parent' sx={{ borderBottom: 1, borderColor: 'divider', display:'flex', justifyContent:'center'  , marginBottom:'60px' , marginTop:'60px' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example" >
            <Tab label="All Products" value="1" className='tab'/>
            <Tab label="Coats & Jacket" value="2" className='tab' />
            <Tab label="Dressed" value="3" className='tab'/>
            <Tab label="Playsuit" value="4" className='tab'/>
            <Tab label="Short" value="5" className='tab' />
            <Tab label="Skirt" value="6" className='tab'/>
            <Tab label="T-Shirt" value="7" className='tab'/>
          </TabList>
        </Box>
          <TabPanel value="1">
            <Box sx={{display:'flex' , flexWrap:'wrap' , gap:'16px'}}>
              <CardCategory />
              <CardCategory />
              <CardCategory />
              <CardCategory />
              <CardCategory />
            </Box>
          </TabPanel>
        <TabPanel value="2">Item Two</TabPanel>
        <TabPanel value="3">Item Three</TabPanel>
      </TabContext>
      </Box>
      </Container>
  );
}
