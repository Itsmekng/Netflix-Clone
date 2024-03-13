import * as React from 'react';
import Button from '@mui/material/Button';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

export default function DisableElevation() {
  return (
    <Button variant="contained" color='error' disableElevation  endIcon={<ChevronRightIcon/>} >
     Get started
    </Button>
  );
}