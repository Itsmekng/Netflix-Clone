import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import BasicButtons from "./SimpleContainer"
import Typography from '@mui/material/Typography';

export default function SimpleContainer() {
  const topMrg={
    top: '25vh',
    position: 'relative',
    backgroundColor: 'transparent',
   color: 'white',
};


  return (
    <React.Fragment>
      <CssBaseline />
      <Container style={topMrg}  maxWidth="xl">
        <Box textAlign={'center'} sx={{ height: '40vh' }} >
        <Typography style={{textShadow: "black 1px 0 10px"}} fontSize={"6vh"} paddingTop={"1.5vh"} marginRight={"15px"} fontFamily={'Paytone One'} gutterBottom>
       Laughter. Tears. Thrills. Find it all on Netflix.
      </Typography>
      <Typography style={{textShadow: "black 1px 0 10px"}} fontSize={"24px"} marginTop={"-4px"} marginRight={"12px"} gutterBottom>
      Endless entertainment starts at just ₹ 149. Cancel anytime.
      </Typography>
      <Typography style={{textShadow: "black 1px 0 10px"}} variant="h6" paddingTop={"12px"} marginRight={"10px"} gutterBottom>
      Ready to watch? Enter your email to create or restart your membership.
      </Typography>
<BasicButtons/>
</Box>
      </Container>
    </React.Fragment>
  );
}