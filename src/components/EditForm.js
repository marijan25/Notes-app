import * as React from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import EditIcon from '@mui/icons-material/Edit';
import CancelIcon from '@mui/icons-material/Cancel';
import Grid from '@mui/material/Grid';

const EditForm = ({open, setOpen,note, notes, setNotes, onEdit}) => {
  const [titleNote, setTitleNote] = useState("");
  const [contentNote, setContentNote] = useState("");
  const handleTitleChange = (event) => {
    setTitleNote(event.target.value);
  };
  const handleContentChange = (event) =>{
    setContentNote(event.target.value);
  };
  const [title, setTitle] = useState();
  const [content, setContent] = useState();
  const onSubmit = (e) => {
    e.preventDefault()
    onEdit(title, content)
    setTitle('')
    setContent('')
  }

  return (
    <Grid>
      <form onSubmit={onSubmit}>  
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
        <Stack direction="row" spacing={2}>
          <Button 
            sx={{width:103, height:40, backgroundColor:'#0097b3'}} 
            onClick = {()=>setOpen(false)}
            variant="contained"  
            disabled={!title||!content} 
            startIcon={<EditIcon />} 
            type='submit' 
            autoFocus>
              Edit
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
      </form>
    </Grid>
  )
}

export default EditForm
