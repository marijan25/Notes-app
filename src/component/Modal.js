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
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import CancelIcon from '@mui/icons-material/Cancel';
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

export default function CustomizedDialogs() {
  const [open, setOpen] = React.useState(false);
  const [titleNote, setTitleNote] = useState("");
  const [contentNote, setContentNote] = useState("");
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleTitleChange = (event) => {
    setTitleNote(event.target.value);
  };
  const handleContentChange = (event) =>{
    setContentNote(event.target.value);
  };

  return (
    <Grid>
      <Button sx={{height:60, backgroundColor:'#6ffbff'}} variant="contained" onClick={handleClickOpen} startIcon={<NoteAddIcon />}>
        Add New Note
      </Button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
      <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
        Add new note
      </BootstrapDialogTitle>
      <DialogContent dividers>
        <form>  
          <Typography variant='paragraph' component='p' textAlign='center'>
            <label>Add a new note subject/title</label> <br />
          </Typography>
          <TextField sx = {{marginTop: 1, backgroundColor: '#6ffbff', width: 226}}
            onChange = {handleTitleChange}
            required
            name='title'
            id="title"
            label="Required"
          />
          <Box sx = {{marginTop: 2}}>
            <Typography variant='paragraph' component='p' textAlign='center'>
            <Box>
              <label>Add content of note</label> <br />
            </Box>
          <TextField sx={{marginTop:1, backgroundColor:'#6ffbff', width:226}}
            required
            onChange={handleContentChange}
            name='content'
            id="content"
            label="Required"
            multiline
            rows={4}
            inputProps = {{maxLength: 300}}
          />
            </Typography><br />
            </Box>
          <Stack direction="row" spacing={2}>
            <Button sx={{width:103, height:40, backgroundColor:'#0097b3'}} variant="contained" onClick={handleClose} disabled={!titleNote||!contentNote} startIcon={<AddCircleIcon />} type='submit' autoFocus>
              Add
            </Button>
            <Button sx={{width:103, height:40, backgroundColor:'#0097b3'}} variant="contained" onClick={handleClose} endIcon={<CancelIcon />}>
              Cancel
            </Button>
          </Stack>
            </form>
          </DialogContent>
          </BootstrapDialog>
    </Grid>
  );
}



  
