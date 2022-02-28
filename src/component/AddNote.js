import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import { useState } from 'react';


const AddNote = () => {
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
          height: 320,
        },
      }}>
        <Paper sx={{marginTop: 1, backgroundColor: '#22c8e5'}} elevation={20}>
          <IconButton sx={{marginTop: -3, marginLeft: 35, color: 'red'}}><CancelIcon /> </IconButton> 
        <Box>
            <Typography variant='paragraph' component='p' marginTop={-2}>
            <label>Add a new note subject/title</label> <br />
            <TextField
                sx = {{marginTop: 1, backgroundColor: '#6ffbff', width: 200}}
                onChange = {handleTitleChange}
                required
                name='titleNote'
                id="titleNote"
                label="Required"
        />
            </Typography>
        </Box>
        <Box sx = {{marginTop: 1}}>
            <Typography variant='paragraph' component='p'>
            <label>Add content of note</label> <br />
        <TextField
          sx = {{marginTop: 1, backgroundColor: '#6ffbff', width: 200}}
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
        <Box marginLeft = {6} sx={{display:'flex', alignItems:"center"}}>
            <Typography>
            <Stack direction="row" spacing={2}>
            <button disabled = {!titleNote || !contentNote} style={{width: 93, height: 40, backgroundColor: '#6ffbff'}} type={'submit'}><AddCircleIcon /></button>
            <button style={{width: 93, height: 40, backgroundColor: '#6ffbff'}} type={'reset'}><CancelIcon /></button>
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
