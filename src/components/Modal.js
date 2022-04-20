import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import ManageNoteForm from '../components/ManageNoteForm';
import BootstrapDialogTitle from '../components/BootstrapDialogTitle';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2)
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

const Modal = ({editForm,open,loadData,handleCloseModal}) => {
  return (
    <Grid>
      <BootstrapDialog 
        aria-labelledby="customized-dialog-title"
        open = {open}
       >
        <BootstrapDialogTitle  
         handleCloseModal={handleCloseModal} 
        >
          {editForm.id ? 'Edit note' : 'Add new note'}
        </BootstrapDialogTitle>
          <ManageNoteForm 
            editForm = {editForm}
            loadData = {loadData}
            handleCloseModal={handleCloseModal} 
          />    
      </BootstrapDialog>
    </Grid>
  )
}

export default Modal
