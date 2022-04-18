import PropTypes from 'prop-types';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import DialogTitle from '@mui/material/DialogTitle';

const BootstrapDialogTitle = ({ children,refresh, ...other }) => {
    return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}  
        <IconButton
          aria-label="close"
          onClick={refresh}
          type='button'
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
    </DialogTitle>
  )
}

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
}; 

export default BootstrapDialogTitle
