import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import ManageNoteForm from './ManageNoteForm';
import BootstrapDialogTitle from '../components/BootstrapDialogTitle';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2)
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

const Modal = ({onAdd,onEdit,newForm,open,onCloseModal}) => {
  return (
    <Grid>
      <BootstrapDialog 
        aria-labelledby="customized-dialog-title"
        open = {open}
      >
        <BootstrapDialogTitle  
        onClose={onCloseModal}>
          {newForm.id ? 'Edit note' : 'Add new note'}
        </BootstrapDialogTitle>
          <ManageNoteForm 
            newForm = {newForm}
            onAdd = {onAdd}
            onEdit = {onEdit}
            onCloseModal = {onCloseModal}
          />    
      </BootstrapDialog>
    </Grid>
  )
}

export default Modal
