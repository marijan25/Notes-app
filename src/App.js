import './App.css';
import BottomNavigation from '@mui/material/BottomNavigation';
import Paper from '@mui/material/Paper';
import CustomizedDialogs from './component/Modal';
import Grid  from '@mui/material/Grid';

function App() {
  return (
    <Grid>
      <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
        <BottomNavigation>
          <CustomizedDialogs/>
        </BottomNavigation >
      </Paper>  
    </Grid>
  );
}

export default App;
