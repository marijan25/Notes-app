import CustomizedDialogs from './components/OpenModal';
import Grid from '@mui/material/Grid';
import Note from './components/Note';
import { Container } from '@mui/material';
import Heading from './components/Heading';
import Paper from '@mui/material/Paper'
import BottomNavigation from '@mui/material/BottomNavigation';
import { useState } from 'react';
import Modal from './components/Modal';
import { SettingsOutlined } from '@mui/icons-material';

const data = [
  {
    id: 1,
    title: "Definition of Done",
    content: "Each task you have here should be made with the following procedure: - For each ticket, you should create a separate branch from the master branch",
    date: "02/02/2021"
  },
  {
    id: 2,
    title: "Layout of page",
    content: "List of hardcoded notes (each note should have a title and short content), - Add button,- Edit button for each note,- Delete button for each note",
    date: "03/03/2021"
  },
  {
    id: 3,
    title: "Create note",
    content: "- Subject/Title of Note ( required field ), - The content of note limited to 300 characters (required field).",
    date: "04/04/2021"
  },
  {
    id: 4,
    title: "Edit note",
    content: "When a user clicks on edit, the same modal as Add note should be displayed with the same rules with few changes - Instead of Add Button, there should be an Edit button.",
    date: "05/05/2021"
  },
  {
    id: 5,
    title: "Delete note",
    content: "When a user clicks on delete button, confirmation modal should be displayed with a question Delete note title* ?",
    date: "06/06/2021"
  }
]
function App() {
  const [notes, setNotes] = useState(data)
  const [open, setOpen] = useState(false)
  const [newForm, setNewForm] = useState({});
  const [indexEditNote, setIndexEditNote] = useState(-1) 
  const current = new Date()
  const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
  const addNote = (note) => {
    const id=Math.floor(Math.random()*10000) + 1
    const newNote = {
      id: id,
      date: date,
      ...note
    }
    setNotes([...notes,newNote])
    setOpen(false)
  }
  const openEditModal = (id) => {
    const indexEditNote = notes.findIndex((note) => note.id === id)
    setIndexEditNote(indexEditNote)
    setNewForm(notes[indexEditNote])
    setOpen(true)
  }
  const editNote = (id,title, content) => {
    notes[indexEditNote].title = title;
    notes[indexEditNote].content = content;
    notes[indexEditNote].date = date
    setNotes(notes)
    setNewForm({})
    setOpen(false)
  }
  return (
    <Grid>
      <Paper 
        sx={{ position:'fixed',bottom:0,left:0,right:0 }} 
        elevation={3}>
        <BottomNavigation>
          <CustomizedDialogs
            open={open} 
            setOpen = {setOpen}
            >
            <Modal 
              onAdd = {addNote} 
              onEdit = {editNote}
              open={open} 
              setOpen = {setOpen}
              indexEditNote={indexEditNote}
              setIndexEditNote = {setIndexEditNote}
              newForm = {newForm}
              setNewForm = {setNewForm}
              />      
          </CustomizedDialogs>
        </BottomNavigation > 
      </Paper>  
      <Heading />
      <Container sx={{marginTop:5, marginBottom:12}}>    
        <Grid container spacing={5}>   
          {notes.map((note) => <Note 
          note={note} 
          key={note.id} 
          openEditModal={openEditModal} 
          />)}  
        </Grid>
      </Container>   
    </Grid>
  );
}

export default App;
