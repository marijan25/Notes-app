import CustomizedDialogs from './components/Modal';
import Grid from '@mui/material/Grid';
import Note from './components/Note';
import { Container } from '@mui/material';
import Heading from './components/Heading';
import Paper from '@mui/material/Paper'
import BottomNavigation from '@mui/material/BottomNavigation';
import { useState, useEffect } from 'react';

function App() {
  const [notes, setNotes] = useState([])
  useEffect(() => {
    const getNotes = async () => {
      const notesFromServer = await fetchNotes()
      setNotes(notesFromServer)
    }
    getNotes()
  }, [])
  const fetchNotes = async () => {
    const res = await fetch('http://localhost:8000/notes')
    const data = await res.json()
    return data
  }
  const addNote = (note) => {
    const id=Math.floor(Math.random()*10000) + 1
    const newNote = {id, ...note}
    setNotes([...notes, newNote])
  }
  return (
    <Grid>
      <Paper 
        sx={{ position:'fixed',bottom:0,left:0,right:0 }} 
        elevation={3}>
        <BottomNavigation>
          <CustomizedDialogs onAdd={addNote}/>
        </BottomNavigation >
      </Paper>  
      <Heading />
      <Container sx={{marginTop:5, marginBottom:12}}>    
        <Grid container spacing={5}>   
          {notes.map((note) => <Note note={note} key={note.id} />)}  
        </Grid>
      </Container>   
    </Grid>
  );
}

export default App;
