import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import LOGO from '../pngegg.png';
import IconLabelButtons from './IconLabelButtons';
import { ThemeProvider, createTheme } from '@mui/material/styles';


export default function SearchAppBar() {
  const darkTheme = createTheme({
    palette: {
      primary: {
        main: '#00000000',
      },
    },
  });
  
  return (
    <Box sx={{ flexGrow: 1 }} >
        <ThemeProvider theme={darkTheme}>
          
      <AppBar position="Fixed" style={{ backgroundColor: "transparent"}}> 
        <Toolbar>
        
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
                 <img src={LOGO} alt='Netflex_Clone_PNG' style={{height: '9vh' , paddingTop: '18px' , marginLeft: '19.4vh'}} />
          </Typography>
   <IconLabelButtons/>
        </Toolbar>
      </AppBar>
      </ThemeProvider>
    </Box>
  );
}