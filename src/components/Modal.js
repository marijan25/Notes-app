import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import PropTypes from 'prop-types';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import DialogTitle from '@mui/material/DialogTitle';
import AddEditForm from './ManageNoteForm'

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2)
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));
const BootstrapDialogTitle = ({ children, onClose, setNewForm, setIdEditNote, ...other }) => {
  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}  
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={() => {
            onClose();
            setNewForm({});
            setIdEditNote();
          }}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};
BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};  
const Modal = ({onAdd,onEdit,setIdEditNote,newForm, open,setOpen,idEditNote, setNewForm}) => {
  return (
    <Grid>
      <BootstrapDialog
        setNewForm = {setNewForm} 
        setIdEditNote = {setIdEditNote}
        aria-labelledby="customized-dialog-title"
        open = {open}
      >
        <BootstrapDialogTitle 
        setNewForm = {setNewForm} 
        setIdEditNote = {setIdEditNote}
        onClose={() => setOpen(false)}>
          {newForm.id ? 'Edit note' : 'Add new note'}
        </BootstrapDialogTitle>
          <AddEditForm 
            setIdEditNote={setIdEditNote}
            newForm = {newForm}
            setOpen = {setOpen}
            idEditNote = {idEditNote}
            setNewForm = {setNewForm}
            onAdd = {onAdd}
            onEdit = {onEdit}
          />
      </BootstrapDialog>
    </Grid>
  )
}

export default Modal
