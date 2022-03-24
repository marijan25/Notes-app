import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import PropTypes from 'prop-types';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2)
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
const AddForm = ({onAdd,open,setOpen}) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const onSubmit = (e) => {
    e.preventDefault()
    onAdd({title,content})
    setOpen(false)
    setTitle('')
    setContent('')
  }
  return (
    <Grid>
      <BootstrapDialog
        onClose={() => setOpen(false)}
        aria-labelledby="customized-dialog-title"
        open = {open}
      >
        <BootstrapDialogTitle onClose={() => setOpen(false)}>
          Add new note
        </BootstrapDialogTitle>
        <form onSubmit={onSubmit}> 
          <DialogContent dividers>
            <Typography variant='paragraph' component='p' textAlign='center'>
              <label>Add a new note subject/title</label> <br />
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
                  <label>Add content of note</label> <br />
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
            <Stack direction="row" spacing={2.5}>
              <Button 
                sx={{width:103, height:40, backgroundColor:'#0097b3'}} 
                variant="contained"  
                disabled={!title||!content} 
                startIcon={<AddCircleIcon />} 
                type='submit' 
                autoFocus>
                  Add
              </Button>
              <Button 
                onClick={() => setOpen(false)}
                sx={{width:103, height:40, backgroundColor:'#0097b3'}} 
                variant="contained"
                startIcon={<CancelIcon />} 
                autoFocus>
                  Cancel
              </Button>
            </Stack>
          </DialogContent> 
        </form>
      </BootstrapDialog>
    </Grid>
  )
}

export default AddForm
