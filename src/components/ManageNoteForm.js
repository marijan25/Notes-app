import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import Grid from '@mui/material/Grid';
import DialogContent from '@mui/material/DialogContent';
import NoteService from '../NoteService';

const ManageNoteForm = ({editForm,refresh}) => {
  const [title, setTitle] = useState(editForm.title)
  const [content, setContent] = useState(editForm.content)
  const onSubmit = (e) => {
    e.preventDefault();
    if(editForm.id){
      NoteService.EditNote({title:title,content:content,id:editForm.id})
      refresh() 
    } else {
      NoteService.AddNote({title:title,content:content})
      refresh()
    }
    setTitle('')
    setTitle('')
  }
  return (
    <Grid>
      <form onSubmit={onSubmit}> 
          <DialogContent dividers>
            <Typography variant='paragraph' component='p' textAlign='center'>
              {editForm.id ? 'Edit a note subject/title' : 'Add a new note subject/title'} <br />
            </Typography>
            <TextField 
              sx={{marginTop:1,backgroundColor:'#6ffbff',width:226}}
              defaultValue={editForm.title}
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
                  {editForm.id ? 'Edit content of note' : 'Add content of note'}<br />
                </Box>
                <TextField 
                  sx={{marginTop:1, backgroundColor:'#6ffbff', width:226}}
                  required
                  defaultValue={editForm.content}
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
                disabled={!title || !content} 
                startIcon={<AddCircleIcon />} 
                type='submit' 
                autoFocus>
                  {editForm.id ? 'Edit' : 'Add'}
              </Button>
              <Button 
                onClick={refresh}
                type = 'button'
                sx={{width:103, height:40, backgroundColor:'#0097b3'}} 
                variant="contained"
                startIcon={<CancelIcon />} 
                autoFocus
                >
                  Cancel
              </Button>
            </Stack>
          </DialogContent> 
        </form>
    </Grid>
  )
}

export default ManageNoteForm
