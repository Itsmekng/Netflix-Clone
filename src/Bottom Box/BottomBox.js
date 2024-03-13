import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import "../Bottom Box/Botton.css"

export default function BottomBar(props) {
  const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '60vh',
   
  });

  
  return (
    
    <React.Fragment>
      <CssBaseline />
      <Container sx={{ paddingTop: "12vh" , height: "77vh", borderTop: 8 , borderColor: '#2d2d2d' , bgcolor: "#000000"}} maxWidth="xl">
        <Box>
        <Stack direction="row" spacing={-8}>
          <box style={{color: "white" , margin: "auto"}}>
        <Typography variant="h3" gutterBottom style={{fontFamily: "Paytone One"}}>
       {props.title}
      </Typography>
      <Typography variant="h5" gutterBottom>
     {props.desc}
      </Typography>
      </box>

      <Img alt="complex" src={props.Model1}  style={{marginRight: "30vh"}} />


    </Stack>

          </Box>
      </Container>
      <Container sx={{ paddingTop: "12vh" , height: "77vh", borderTop: 8 , borderColor: '#2d2d2d' , bgcolor: "#000000"}} maxWidth="xl">
        <Box>
        <Stack direction="row" spacing={2}>
        

      <Img alt="complex" src={props.Model2}  style={{marginLeft: "20vh"}} />
      <box style={{color: "white" , margin: "auto"}}>
        <Typography variant="h3" gutterBottom style={{fontFamily: "Paytone One"}}>
        {props.title2}
      </Typography>
      <Typography variant="h5" gutterBottom>
    {props.desc2}
      </Typography>
      </box>

    </Stack>

          </Box>
      </Container>
    </React.Fragment>
  );
}

