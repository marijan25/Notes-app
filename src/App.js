import CustomizedDialogs from './components/OpenModal';
import Grid from '@mui/material/Grid';
import Note from './components/Note';
import { Container } from '@mui/material';
import Heading from './components/Heading';
import Paper from '@mui/material/Paper';
import BottomNavigation from '@mui/material/BottomNavigation';
import { useState } from 'react';
import Modal from './components/Modal'
import { getNotes } from './NoteService'

function App() {
  const loadNotes = () => getNotes().then((note) => setNotes(note));
  const [notes, setNotes] = useState(loadNotes)
  const [open, setOpen] = useState(false)
  const [editForm, setEditForm] = useState({});
  const handleCloseModal = () => {
    setOpen(false)
    setEditForm({})
  }
  const loadData = () => {
    handleCloseModal()
    setNotes(loadNotes())
  }
  const openEditModal = (note) => {
    setEditForm(note)
    setOpen(true)
  }
  return (
    <Grid>
      <Paper 
        sx={{ position:'fixed',bottom:0,left:0,right:0 }} elevation={3}>
        <BottomNavigation>
          <CustomizedDialogs
            open={open} 
            setOpen = {setOpen}
            loadData = {loadData}
            handleCloseModal = {handleCloseModal}
            >
            <Modal
              open={open} 
              editForm = {editForm}
              loadData = {loadData}
              handleCloseModal = {handleCloseModal}
              />     
          </CustomizedDialogs>
        </BottomNavigation > 
      </Paper>  
      <Heading />
      {notes.length ? 
        (<Container sx={{marginTop:5, marginBottom:12}}>    
          <Grid container spacing={5}>  
            {notes.map((note) => <Note 
            note={note} 
            key={note.id} 
            openEditModal={openEditModal} 
            loadData = {loadData}
          />)} 
          </Grid>
        </Container>) : (<h1 style={{marginLeft: 200}}>No notes to show</h1>)
      }  
    </Grid>
  );
}

export default App;
