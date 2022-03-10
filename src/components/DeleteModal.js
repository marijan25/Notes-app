import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 155,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  p: 2,
  textAlign: 'center'
};

export default function BasicModal({titleNote, openDeleteModal, setOpenDeleteModal, deleteNoteTrue}) {
  const handleOpen = () => setOpenDeleteModal(true);
  const handleClose = () => setOpenDeleteModal(false);
  return (
    <Grid>
      <Modal
        open={openDeleteModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <p>Delete "{titleNote}"?</p>
            <Stack spacing={3} direction='row'>
                <Button 
                    onClick={deleteNoteTrue} 
                    variant='contained' 
                    color='error' 
                    sx={{color:'white'}}
                    >
                        Yes
                </Button>
                <Button 
                    onClick={handleClose} 
                    variant='contained' 
                    color='success' 
                    sx={{backgroundColor:'green', color:'white'}}>
                        No
                </Button>
          </Stack>
        </Box>
      </Modal>
    </Grid>
  );
}
