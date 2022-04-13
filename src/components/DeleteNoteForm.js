import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2)
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

const DeleteNoteForm = ({deleteNote,note,open,setOpen}) => {
  return (
    <BootstrapDialog
      open={open}
    >
      <DialogContent>
        <p>Delete "{note.title}"?</p>
          <Stack spacing={3} direction='row'>
            <Button 
              onClick={() => deleteNote(note.id)} 
              variant='contained' 
              color='error' 
              sx={{color:'white'}}
            >
              Yes
            </Button>
            <Button 
              onClick={() => setOpen(false)} 
              variant='contained' 
              color='success' 
              sx={{backgroundColor:'green', color:'white'}}>
                No
            </Button>
          </Stack>
      </DialogContent>
    </BootstrapDialog>
  );
}

export default DeleteNoteForm