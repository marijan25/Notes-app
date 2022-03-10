import Grid from '@mui/material/Grid';
import Note from './components/Note';
import { Container } from '@mui/material';
import Heading from './components/Heading';
import Paper from '@mui/material/Paper';
import BottomNavigation from '@mui/material/BottomNavigation';
import Button from '@mui/material/Button';
import AddBoxIcon from '@mui/icons-material/AddBox';
import { useState } from 'react';
import DeleteModal from './components/DeleteModal';

function App() {
  const [notes, setNotes] = useState([
    {
      id: 1,
      title: "Definition of Done",
      content: "Each task you have here should be made with the following procedure: - For each ticket, you should create a separate branch from the master branch"
    },
    {
      id: 2,
      title: "Layout of page",
      content: "List of hardcoded notes (each note should have a title and short content), - Add button,- Edit button for each note,- Delete button for each note"
    },
    {
      id: 3,
      title: "Create note",
      content: "- Subject/Title of Note ( required field ), - The content of note limited to 300 characters (required field)."
    },
    {
      id: 4,
      title: "Edit note",
      content: "When a user clicks on edit, the same modal as Add note should be displayed with the same rules with few changes - Instead of Add Button, there should be an Edit button."
    },
    {
      id: 5,
      title: "Delete note",
      content: "When a user clicks on delete button, confirmation modal should be displayed with a question Delete note title* ?"
    }
  ])
  const [openDeleteModal, setOpenDeleteModal] = useState({
    show: false,
    id: null,
    titleNote: ""
  });
  const handleDialog = (show, id, titleNote) => {
    setOpenDeleteModal({
      show,
      id,
      titleNote
    })
  }
  const deleteNote = (id) => {
   const index = notes.findIndex((note) => note.id === id)
   handleDialog(true, id, notes[index].title)
  }
  const deleteNoteTrue = (id, titleNote) => {
    if(openDeleteModal.show && openDeleteModal.id){
      let filteredData = notes.filter((note) => note.id !== openDeleteModal.id)
      setNotes(filteredData)
      setOpenDeleteModal({
        show: false,
        id,
        titleNote
      })
    }
  }
  return (
    <Grid>
      <Heading />
      <Container sx={{marginTop:5, marginBottom:12}}>    
        <Grid container spacing={5}>   
          {notes.map((note) => <Note onDelete={deleteNote} note={note} key={note.id} />)}    
        </Grid>
      </Container>   
      <Paper sx={{position:'fixed',bottom:0, left:0, right:0}} elevation={3}>
        <BottomNavigation>
          <Button variant="contained" sx={{backgroundColor: '#21b5b4',color:'white', width:200, height:57}}><AddBoxIcon />ADD NEW NOTES</Button>
        </BottomNavigation>
      </Paper>
      {openDeleteModal.show && <DeleteModal 
        titleNote={openDeleteModal.titleNote}
        openDeleteModal={openDeleteModal} 
        setOpenDeleteModal={setOpenDeleteModal} 
        deleteNoteTrue={deleteNoteTrue}
      />}
    </Grid>
  );
}

export default App;
