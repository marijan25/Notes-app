import Grid from '@mui/material/Grid';
import Note from './components/Note';
import { Container } from '@mui/material';
import Heading from './components/Heading';
import Paper from '@mui/material/Paper'
import notesList from './data.json';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Button from '@mui/material/Button';
import AddBoxIcon from '@mui/icons-material/AddBox';

function App() {
  return (
    <Grid>
      <Heading />
      <Container sx={{marginTop:5, marginBottom:12}}>    
        <Grid container spacing={5}>   
          {notesList.exampleNotes.map((note,index) => <Note note={note} key={note.id} />)}  
        </Grid>
      </Container>   
      <Paper sx={{position:'fixed',bottom:0, left:0, right:0}} elevation={3}>
        <BottomNavigation>
          <Button variant="contained" sx={{backgroundColor: '#21b5b4',color:'white', width:200, height:57}}><AddBoxIcon />ADD NEW NOTES</Button>
        </BottomNavigation>
      </Paper>
    </Grid>
  );
}

export default App;
