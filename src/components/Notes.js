import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Typography  from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import '../App.css';

const Notes = ({note}) => {
  return (
    <Grid item xs = {4}>
      <Paper elevation={20} sx={{height:180,width:300,backgroundColor:'#9effff'}}>
        <Box 
          sx={{
          display:"flex",
          alignItems:"center",
          borderStyle:"outset",
          borderColor:"black",
          backgroundColor:"#009eb6"
          }}>
          <Box>
            <Stack direction="row">
              <IconButton aria-label="edit">
                <EditIcon />
              </IconButton>
              <IconButton aria-label="delete">
                <DeleteIcon />
              </IconButton>
            </Stack>
          </Box>
          <Typography variant='h6' component='h3' 
            textAlign={"center"} color={'white'}>
              {note.title}
          </Typography> 
        </Box>
        <Box marginLeft={1} padding={0.5} sx={{
          display: "flex",
          alignItems:"center",
          }}> 
          <Typography variant='p' component='paragraph'>
            {note.content}
          </Typography>
        </Box>
      </Paper>
    </Grid>
  )
}

export default Notes
