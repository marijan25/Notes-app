import * as React from 'react';
import Grid from '@mui/material/Grid';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import NoteAddIcon from '@mui/icons-material/NoteAdd';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));
const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;
  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};
BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default function CustomizedDialogs({children,open,setOpen}) {
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };  
  return (
    <Grid>
      <Button 
        sx={{backgroundColor:'#21b5b4',color:'white',width:200,height:57}} 
        variant="contained" 
        onClick={handleClickOpen}
        startIcon={<NoteAddIcon />}>
          Add New Note
      </Button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle onClose={handleClose}>
          Add new note
        </BootstrapDialogTitle>
        <DialogContent dividers>
          {children}
        </DialogContent>
      </BootstrapDialog>
    </Grid>
  );
}
