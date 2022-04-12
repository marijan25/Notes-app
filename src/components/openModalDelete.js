import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

export default function CustomizedDialogs({children, setOpen}) {
  const handleClickOpen = () => {
    setOpen(true);
  }; 
  return (
    <Grid>
      <IconButton 
        onClick={handleClickOpen}
        >
         <DeleteIcon /> 
      </IconButton>
       {children}
    </Grid>
  );
}
