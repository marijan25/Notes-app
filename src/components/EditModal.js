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
import EditIcon from '@mui/icons-material/Edit';

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

export default function CustomizedDialogs({ note }) {
  const [open, setOpen] = React.useState(false);
  const [titleNote, setTitleNote] = useState("");
  const [contentNote, setContentNote] = useState("");
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    setTitle('');
    setContent('');
  };
  const handleTitleChange = (event) => {
    setTitleNote(event.target.value);
  };
  const handleContentChange = (event) =>{
    setContentNote(event.target.value);
  };
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const onSubmit = (e) => {
    e.preventDefault()
    //onAdd({title,content})
    setTitle('')
    setContent('')
  }
  return (
    <Grid>
        <IconButton aria-label="edit" onClick={handleClickOpen}>
            <EditIcon />
        </IconButton>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle onClose={handleClose}>
          Edit note
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <form onSubmit={onSubmit}>  
            <Typography variant='paragraph' component='p' textAlign='center'>
              <label>Edit note subject/title</label> <br />
            </Typography>
            <TextField 
              sx={{marginTop:1,backgroundColor:'#6ffbff',width:226}}
              value={title}
              onChange = {(e) => setTitle(e.target.value)}
              required
              name='title'
              id="title"
              label="Required"
            />
            <Box sx={{marginTop:2}}>
              <Typography 
                variant='paragraph' 
                component='p' 
                textAlign='center'>
              <Box>
                <label>Edit content of note</label> <br />
              </Box>
            <TextField 
              sx={{marginTop:1, backgroundColor:'#6ffbff', width:226}}
              required
              value={content}
              onChange = {(e) => setContent(e.target.value)}
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
              <Button 
                sx={{width:103, height:40, backgroundColor:'#0097b3'}} 
                variant="contained"  
                disabled={!title||!content} 
                startIcon={<EditIcon />} 
                type='submit' 
                autoFocus>
                  Edit
              </Button>
              <Button 
                sx={{width:103, height:40, backgroundColor:'#0097b3'}} 
                variant="contained" 
                onClick={handleClose} 
                startIcon={<CancelIcon />} 
                type='reset' 
                autoFocus>
                  Cancel
              </Button>
            </Stack>
          </form>
        </DialogContent>
      </BootstrapDialog>
    </Grid>
  );
}
