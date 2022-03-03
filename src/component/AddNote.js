import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import { useState } from 'react';
import Button from '@mui/material/Button';
import Modal from '../component/Modal';

const commonStyles = {
  bgcolor: '#6ffbff',
  m: 1,
  borderColor: 'black',
  marginLeft: 4.7,
  width: '14rem',
  height: '1.5rem',
};

const AddNote = ({closeModal}) => {
 const [titleNote, setTitleNote] = useState("");
 const [contentNote, setContentNote] = useState("");
 
 const handleTitleChange = (event) => {
     setTitleNote(event.target.value);
 };

 const handleContentChange = (event) =>{
     setContentNote(event.target.value);
 };

 const handleSubmit = (event) => {
     event.preventDefault();
 }

 
  return (
    <div>
        <form onSubmit={handleSubmit}>
        <Box sx={{
        display: 'flex',
        textAlign: 'center',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: 300,
          height: 365,
        },
      }}>
        <Paper sx={{marginTop: 1, backgroundColor: '#22c8e5'}} elevation={20}>
          <IconButton sx={{marginTop: -3, marginLeft: 35, color: 'red'}} onClick = {() => closeModal(false)}><CancelIcon /> </IconButton> 
        <Box>
            <Typography variant='paragraph' component='p' marginTop={-2}>
            <Box sx={{ ...commonStyles, border: 1 }}>
            <label>Add a new note subject/title</label> <br />
            </Box>
            <TextField
                sx = {{marginTop: 1, backgroundColor: '#6ffbff', width: 226}}
                onChange = {handleTitleChange}
                required
                name='titleNote'
                id="titleNote"
                label="Required"
        />
            </Typography>
        </Box>
        <Box sx = {{marginTop: 2}}>
            <Typography variant='paragraph' component='p'>
            <Box sx={{ ...commonStyles, border: 1 }}>
            <label>Add content of note</label> <br />
            </Box>
        <TextField
          sx = {{marginTop: 1, backgroundColor: '#6ffbff', width: 226}}
          required
          onChange={handleContentChange}
          name='contentNote'
          id="contentNote"
          label="Required"
          multiline
          rows={4}
          inputProps = {{maxLength: 300}}
        />
        </Typography><br />
        </Box>
        <Box marginLeft = {5} sx={{display:'flex', alignItems:"center"}}>
            <Typography>
            <Stack direction="row" spacing={2}>
            <Button sx={{width: 103, height: 40, backgroundColor:'#0097b3'}} disabled = {!titleNote || !contentNote} type={'submit'} variant="contained" startIcon={<AddCircleIcon />}>
        Add
      </Button>
      <Button variant="contained" sx={{width: 103, height: 40, backgroundColor:'#0097b3'}} endIcon={<CancelIcon />}
      onClick = {() => closeModal(false)}
      >
        Cancel
      </Button>
            </Stack>
            </Typography>
        </Box>
        </Paper>
        </Box>
        </form>
    </div>
  )
    }
  

export default AddNote

