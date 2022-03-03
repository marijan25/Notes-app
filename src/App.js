import './App.css';
import AddNote from './component/AddNote';
import Modal from './component/Modal';
import BottomNavigation from '@mui/material/BottomNavigation';
import BasicModal from './component/Modal';
import Paper from '@mui/material/Paper';
import { useState } from "react";
import Button from '@mui/material/Button';
import Box from '@mui/material/Box'
import CustomizedDialogs from './component/Modal';



function App() {
  

  return (
    <div className="App">
     <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
      <BottomNavigation>
        <CustomizedDialogs title={'Modal'}>
          <AddNote />
        </CustomizedDialogs>
      
      </BottomNavigation >
      </Paper>
      <AddNote />
      
    </div>
  );
}

export default App;
