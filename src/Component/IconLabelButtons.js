import * as React from 'react';
import Button from '@mui/material/Button';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Stack from '@mui/material/Stack';
import TranslateIcon from '@mui/icons-material/Translate';
export default function IconLabelButtons() {
  return (
    <Stack direction="row" spacing={3} style={{marginRight: '22vh' , marginTop: '12px'}}>
      <Button variant="outlined" size="small" color="inherit" startIcon={<TranslateIcon/>} endIcon={<ArrowDropDownIcon/>}>
        English
      </Button>
      <Button variant="contained" size="small" color="error">
        Sign in
      </Button>
    </Stack>
  );
}