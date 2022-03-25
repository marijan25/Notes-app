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

const AddEditForm = ({onAdd,onEdit,id, setIndexEditNote,newForm,setOpen,indexEditNote, setNewForm}) => {
  const [title, setTitle] = useState(newForm.title)
  const [content, setContent] = useState(newForm.content)
  const onSubmit = (e) => {
    if(indexEditNote > -1){
      e.preventDefault()
      onEdit(id, title, content)
      setTitle('')
      setContent('')
      }
    else{
      e.preventDefault()
      onAdd({title,content})
      setOpen(false)
      setTitle('')
      setContent('')
    }
    setIndexEditNote(-1)
  }
  return (
    <Grid>
      <form onSubmit={onSubmit}> 
          <DialogContent dividers>
            <Typography variant='paragraph' component='p' textAlign='center'>
              {indexEditNote > -1 ? 'Edit a note subject/title' : 'Add a new note subject/title'} <br />
            </Typography>
            <TextField 
              sx={{marginTop:1,backgroundColor:'#6ffbff',width:226}}
              defaultValue={newForm.title}
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
                  {indexEditNote > -1 ? 'Edit content of note' : 'Add content of note'}<br />
                </Box>
                <TextField 
                  sx={{marginTop:1, backgroundColor:'#6ffbff', width:226}}
                  required
                  defaultValue={newForm.content}
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
                  {indexEditNote > -1 ? 'Edit' : 'Add'}
              </Button>
              <Button 
                onClick={() => {
                  setOpen(false);
                  setNewForm({});
                  setIndexEditNote(-1)
                }}
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

export default AddEditForm
