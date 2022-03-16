import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import DialogContent from '@mui/material/DialogContent';
import NoteAddIcon from '@mui/icons-material/NoteAdd';

export default function CustomizedDialogs({children,open,setOpen}) {
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };  
  return (
    <Grid>
      <Button 
        sx={{backgroundColor:'#21b5b4',color:'white',width:200,height:57}} 
        variant="contained" 
        onClick={handleClickOpen}
        startIcon={<NoteAddIcon />}>
          Add New Note
      </Button>
        <DialogContent dividers>
          {children}
        </DialogContent>
      
    </Grid>
  );
}

