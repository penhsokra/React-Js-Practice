import * as React from 'react';
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
export default function BasicAlerts(props) {
  return (
    <Stack spacing={2} sx={{ width: '100%' }}>
      <Snackbar
        style={{ top: '20%' }}
        open={props.open}
        autoHideDuration={3000}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <Alert variant='filled' severity='success' sx={{ width: '100%' }}>
          {props.message}
        </Alert>
      </Snackbar>
    </Stack>
  );
}
