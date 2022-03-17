import CustomizedDialogs from './components/Modal';
import Grid from '@mui/material/Grid';
import Note from './components/Note';
import { Container, Modal } from '@mui/material';
import Heading from './components/Heading';
import Paper from '@mui/material/Paper'
import BottomNavigation from '@mui/material/BottomNavigation';
import { useState } from 'react';
import AddForm from './components/AddForm';


const data = [
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
]

function App() {
  const [notes, setNotes] = useState(data)
  const [open, setOpen] = useState(false);
  const [newId, setNewId] = useState()

  const addNote = (note) => {
    const newId=Math.floor(Math.random()*10000) + 1
    setNewId(newId)
    const newNote = {newId, ...note}
    setNotes([...notes, newNote])
    setFormData(...notes, newNote)
  }

  const [formData, setFormData] = useState({
    id: newId,
    title: "",
    content: ""
  })


  const [indexEditNote, setIndexEditNote] = useState(-1)
  const [openEditModal, setOpenEditModal] = useState({
    show: false,
    id: null,
    titleNoteShow: "",
    contentNoteShow: ""
  });

  const handleEditDialog = (show,id,titleNoteShow,contentNoteShow) => {
    setOpenEditModal({
      show,
      id,
      titleNoteShow,
      contentNoteShow
    })
  }
  const editNote = (id) => {
    const indexEditNote = notes.findIndex((note) => note.id === id)
    setIndexEditNote(indexEditNote)
    handleEditDialog(true, id, notes[indexEditNote].title, notes[indexEditNote].content)
  }
  const editNoteTrue = (id, title, content, titleNoteShow, contentNoteShow) => {
    if(openEditModal.show && openEditModal.id){
      notes[indexEditNote].title = title;
      notes[indexEditNote].content = content;
      setNotes(notes)   
      setOpenEditModal({
        show: false,
        id,
        titleNoteShow,
        contentNoteShow
      })
    }
  }
  return (
    <Grid>
      <Paper 
        sx={{ position:'fixed',bottom:0,left:0,right:0 }} 
        elevation={3}>
        <BottomNavigation>
          <CustomizedDialogs
            open={open} 
            setOpen = {setOpen}>
            <AddForm 
              onAdd = {addNote} 
              open={open} 
              setOpen = {setOpen}/>
          </CustomizedDialogs>
        </BottomNavigation > 
      </Paper>  
      <Heading />
      <Container sx={{marginTop:5, marginBottom:12}}>    
        <Grid container spacing={5}>   
          {notes.map((note) => <Note onEdit={editNote} note={note} key={note.id} />)}  
        </Grid>
      </Container>  
      {openEditModal.show && <Modal 
        titleNoteShow={openEditModal.titleNoteShow}
        contentNoteShow={openEditModal.contentNoteShow}
        openEditModal={openEditModal} 
        setOpenEditModal={setOpenEditModal} 
        editNoteTrue={editNoteTrue}
      />}
 
    </Grid>
  );
}

export default App;
