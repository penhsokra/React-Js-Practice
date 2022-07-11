import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import Button from '@mui/material/Button';

export default function LoadingCommponent(props) {
  return (
    <div>
      <Backdrop
        sx={{ color: '#fff', zIndex: 9999999999 }}
        open={props.open}
        onClick={props.handleClose}
      >
        <CircularProgress color='inherit' />
      </Backdrop>
    </div>
  );
}
