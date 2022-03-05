import Grid from "@mui/material/Grid"
import NoteAltIcon from '@mui/icons-material/NoteAlt';
import Box from '@mui/material/Box'
import Typography from "@mui/material/Typography";

const Heading = () => {
  return (
    <Grid>
      <Grid container spacing={0} sx={{backgroundColor:'#21b5b4', height:80}}>
        <Box sx={{
          display: "flex",
          alignItems:"center",
          }}>
          <Typography variant='h3' component='h1' marginLeft={1} color='white'>
            <NoteAltIcon sx={{ fontSize: 40, }} />
              Notes App
          </Typography>
        </Box>
      </Grid>
    </Grid>
  )
}

export default Heading
