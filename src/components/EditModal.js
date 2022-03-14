import * as React from 'react';
import Grid from '@mui/material/Grid';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';
import EditIcon from '@mui/icons-material/Edit';
import EditForm from '../components/EditForm'

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));
const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;
  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
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

export default function CustomizedDialogs({editNoteTrue,openEditModal,setOpenEditModal,titleNoteShow,contentNoteShow}) {
  const [titleNote, setTitleNote] = useState("");
  const [contentNote, setContentNote] = useState("");
  const handleClickOpen = () => {
    setOpenEditModal(true);
  };
  const handleClose = () => {
    setOpenEditModal(false);
    setTitle('');
    setContent('');
  };
  const handleTitleChange = (event) => {
    setTitleNote(event.target.value);
  };
  const handleContentChange = (event) =>{
    setContentNote(event.target.value);
  };
  const [title, setTitle] = useState(titleNoteShow);
  const [content, setContent] = useState(contentNoteShow);
  return (
    <Grid>
      <IconButton aria-label="edit" onClick={handleClickOpen}>
        <EditIcon />
      </IconButton>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={openEditModal}
      >
        <BootstrapDialogTitle onClose={handleClose}>
          Edit note
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <EditForm 
            titleNoteShow={openEditModal.titleNoteShow}
            contentNoteShow={openEditModal.contentNoteShow}
            openEditModal={openEditModal} 
            setOpenEditModal={setOpenEditModal} 
            editNoteTrue={editNoteTrue}
          />
        </DialogContent>
      </BootstrapDialog>
    </Grid>
  );
}
