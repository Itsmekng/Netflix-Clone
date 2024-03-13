import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import "./SimpleContainer.css"


export default function BasicButtons() {
  
  return (
    <Stack spacing={0} direction="row" justifyContent={'center'} style={{paddingBottom: "10vh" , marginTop: "2vh" , marginRight:"10px"}} >
    
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '45ch' , marginTop: "0px"}
      }}
      noValidate
      autoComplete="off"
    >
      <input placeholder='Email Address' className="w3-input" type="text" style={{ color: "white" , border: "1px solid grey" , fontSize: "15px" , paddingLeft: "2vh" ,height: "7.2vh" , backgroundColor: "transparent" , borderRadius: "5px" , }} />
    </Box>

          <Button style={{backgroundColor: "red"}} endIcon={<ArrowForwardIosIcon />} variant="contained" sx={{width: "27vh", fontSize: "19px", height: "7.4vh"}} disableElevation>
      Get Started
    </Button>
    </Stack>
  );
}
