import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import EditIcon from '@mui/icons-material/Edit';
import Typography  from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import CustomizedDialogs from '../components/DeleteModal';
import { useState } from 'react';
import DeleteNoteForm from '../components/DeleteNoteForm';

const Note = ({note,openEditModal,deleteNote}) => {
  const [open, setOpen] = useState(false)
  return (
    <Grid item xs = {4}>
      <Paper elevation={20} sx={{height:180,width:300,backgroundColor:'#9effff'}}>
        <Box 
          sx={{
          display:"flex",
          alignItems:"center",
          borderStyle:"outset",
          borderColor:"black",
          backgroundColor:"#009eb6",
          height:35, width:298
          }}>
          <Box>
            <Stack direction="row">
              <IconButton 
                onClick={() => openEditModal(note)}
              >
                <EditIcon/>
              </IconButton>
              <CustomizedDialogs
              open={open}
              setOpen={setOpen}
              >
                <DeleteNoteForm 
                  note={note}
                  open={open}
                  setOpen={setOpen}
                  deleteNote={deleteNote}
                />
              </CustomizedDialogs>
            </Stack>
          </Box>
          <Typography 
            variant='h6' 
            component='h3' 
            textAlign={"center"} 
            color={'white'}>
              {note.title}
          </Typography>
        </Box> 
        <Box sx={{display: "flex",height:170, width:298}}> 
          <Typography 
            variant='p' 
            component='paragraph' 
            sx={{height:140, width:298}} >
            <TextareaAutosize
              style={{
              maxWidth:295, maxHeight:98,
              minWidth:295, minHeight:98,
              backgroundColor:'#9effff', color:'black', fontFamily:'arial', fontSize:14}} 
              multiline
              rows={6}
              value={note.content}
              disabled
            />
            <Typography 
            variant='h6' 
            component='h3' 
            textAlign={"center"} 
            color={'white'} sx={{backgroundColor:'#9effff', color:'black', textAlign:'left', marginLeft:1}}>
             Date: {note.date}
            </Typography>
          </Typography>
        </Box>
      </Paper>
    </Grid>
  )
}

export default Note
