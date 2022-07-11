import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import KeyIcon from '@mui/icons-material/Key';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import AppBar from '@mui/material/AppBar';
import CloseIcon from '@mui/icons-material/Close';
import Divider from '@mui/material/Divider';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import {
  Box,
  Checkbox,
  Container,
  FormControlLabel,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Typography,
  Toolbar,
  FormControl,
  FormLabel,
  RadioGroup,
  Radio,
  TextField,
} from '@mui/material';
import IconTextField from '../IconTextField/IconTextField';
import { padding } from '@mui/system';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction='up' ref={ref} {...props} />;
});
export default function AddCourseDialog(props) {
  var open = props.open;
  return (
    <div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={props.onClose}
        aria-describedby='alert-dialog-slide-description'
      >
        <AppBar sx={{ position: 'relative' }}>
          <Toolbar>
            <Typography sx={{ flex: 1 }} variant='h6' component='div'>
              ADD NEW COURSE
            </Typography>
            <IconButton
              edge='start'
              color='inherit'
              onClick={props.onClose}
              aria-label='close'
            >
              <CloseIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <DialogContent style={{ maxWidth: 360 }}>
          <Grid className=''>
            <Box className=''>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={12} md={12}>
                  <TextField
                    label='COURSE NAME'
                    name='COURSENAME'
                    onChange={props.onChange}
                    style={{ width: '100%' }}
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={12}>
                  <TextField
                    label='PRICE'
                    name='PRICE'
                    onChange={props.onChange}
                    style={{ width: '100%' }}
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={12}>
                  <TextField
                    label='DESCRITION'
                    name='DESCRITION'
                    onChange={props.onChange}
                    style={{ width: '100%' }}
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={12} style={{ paddingTop: 5 }}>
                  <RadioGroup
                    row
                    aria-labelledby='demo-row-radio-buttons-group-label'
                    name='STATUS'
                    onChange={props.onChange}
                  >
                    <FormControlLabel
                      value='1'
                      control={<Radio />}
                      label='OPEN'
                    />
                    <FormControlLabel
                      value='0'
                      control={<Radio />}
                      label='CLOSED'
                      onChange={props.onChange}
                    />
                  </RadioGroup>
                </Grid>
                <Grid item xs={12} sm={12} md={12}>
                  <Grid container spacing={2} style={{ padding: '0 0 0' }}>
                    <Grid item xs={12} sm={12} md={12}>
                      <Button
                        onClick={props.onAdd}
                        variant='outlined'
                        size='large'
                        style={{ width: '100%' }}
                      >
                        ADD
                      </Button>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </DialogContent>
      </Dialog>
    </div>
  );
}
