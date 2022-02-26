import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Typography  from '@mui/material/Typography';
import { style } from '@mui/system';
import Button from '@mui/material/Button';
import '../App.css';


const Notes = ({note}) => {
  return (
            <Grid item xs = {4}>
           <Paper elevation={20} sx={{height:180, width: 300, backgroundColor: '#9effff'}}>
               
              <Box 
              sx={{
              display: "flex",
              alignItems:"center",
              borderStyle: "outset",
              borderColor: "black",
              backgroundColor: "#009eb6"
          }}>
              <Box>
               <button className='btn'> <EditIcon /></button> 
                <button className='btn'><DeleteIcon /></button>
                </Box>
                <Typography variant='h6' component='h3' 
                marginLeft = {1} textAlign = {"center"} color = {'white'}>
                    {note.title}
                </Typography> 
              </Box>
                
                <Box marginLeft = {1} padding = {0.5} sx={{
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
