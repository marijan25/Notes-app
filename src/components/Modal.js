import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import '../App.css';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  border: '1px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className='modal'>
      
      <button className='btn-modal' onClick={handleOpen}>
       <Box sx={{
        display: "flex",
        alignItems:"center",
    }} > <NoteAddIcon />
    <Typography variant='h6' component='h2'>Add New Notes</Typography> 
      </Box>
    </button >
    
    </div>
  )}
