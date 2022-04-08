import PropTypes from 'prop-types';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import DialogTitle from '@mui/material/DialogTitle';

const BootstrapDialogTitle = ({ children, onClose, ...other }) => {
    BootstrapDialogTitle.propTypes = {
      children: PropTypes.node,
      onClose: PropTypes.func.isRequired,
    };  
    return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}  
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={() => {
            onClose();
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
  )
}

export default BootstrapDialogTitle
