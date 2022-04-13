import CustomizedDialogs from './components/OpenModal';
import Grid from '@mui/material/Grid';
import Note from './components/Note';
import { Container } from '@mui/material';
import Heading from './components/Heading';
import Paper from '@mui/material/Paper';
import BottomNavigation from '@mui/material/BottomNavigation';
import { useState } from 'react';
import Modal from './components/Modal'

function App() {
  const [notes, setNotes] = useState([])
  const [open, setOpen] = useState(false)
  const [newForm, setNewForm] = useState({});
  const current = new Date()
  const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
  const onCloseModal = () => {
    setOpen(false)
    setNewForm({})
  }
  const addNote = (title,content) => {
    const id=Math.floor(Math.random()*10000) + 1
    const newNote = {
      id: id,
      title: title,
      content: content,
      date: date,
    }
    setNotes([...notes,newNote])
    onCloseModal()
  }
  const openEditModal = (note) => {
    setNewForm(note)
    setOpen(true)
  }
  const editNote = (title, content) => {
    newForm.title = title;
    newForm.content = content;
    newForm.date = date
    setNotes(notes)
    onCloseModal()
  }
  const deleteNote = (id) => {
    let filteredData = notes.filter((note) => note.id !== id)
    setNotes(filteredData)
  }
  return (
    <Grid>
      <Paper 
        sx={{ position:'fixed',bottom:0,left:0,right:0 }} elevation={3}>
        <BottomNavigation>
          <CustomizedDialogs
            open={open} 
            setOpen = {setOpen}
            onClose = {onCloseModal}
            >
            <Modal
              onAdd = {addNote} 
              onEdit = {editNote}
              open={open} 
              newForm = {newForm}
              onClose = {onCloseModal}
              />     
          </CustomizedDialogs>
        </BottomNavigation > 
      </Paper>  
      <Heading />
      {notes.length ? '' : <h1 style={{marginLeft: 200}}>No Notes To Show</h1>}
      <Container sx={{marginTop:5, marginBottom:12}}>    
        <Grid container spacing={5}>  
        {notes.map((note) => <Note 
          note={note} 
          key={note.id} 
          openEditModal={openEditModal} 
          deleteNote = {deleteNote}
          />)} 
        </Grid>
      </Container>   
    </Grid>
  );
}

export default App;