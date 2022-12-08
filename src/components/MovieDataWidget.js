import { Box, Grid, Typography } from '@mui/material'

export const MovieDataWidget = ({ logo, title, content }) => {
  return (
      <Grid item sx={{ display: 'flex', flexDirection: 'row', alignItems: "center", m: 1 }}>
          {logo}
          <Box sx={{ background: 'red', minWidth: '2px', height: '60px', mx: 1 }} />
          <Box>
              <Typography component='h6' variant='h6'>
                  {title}
              </Typography>
              <Typography component='p' variant='body2' color="text.secondary" >
                  {content}
              </Typography>
          </Box>
      </Grid>
  )
}
