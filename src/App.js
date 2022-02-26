import './App.css';
import Grid from '@mui/material/Grid';
import Notes from './components/Notes';
import { Container } from '@mui/material';
import Heading from './components/Heading';
import BasicModal from './components/Modal';
import BottomNavigation from '@mui/material/BottomNavigation';
import Paper from '@mui/material/Paper'
import notesList from './data.json';
import { LocationCity } from '@mui/icons-material';
function App() {
  return (
    <div>
    <Heading />
    <Container sx={{marginTop: 5, marginBottom: 12, }}>
    {notesList.map((notes) => (

<Grid container spacing={5}> 
   
{notes.exampleNotes.map((note,index) => <Notes note={note} key={index} />)}




</Grid>
))}
       
    
    
   
        
      
        
      
    

    
      </Container>
      
      <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
        <BottomNavigation>
        
          
        <BasicModal />
          
        
        </BottomNavigation>
     
      </Paper>
       
     
    </div>
  );
}

export default App;
