import { Backdrop, CircularProgress } from '@mui/material'
import { red } from '@mui/material/colors'

export const LoadingProgressBar = ( {open} ) => {
  return (
      <Backdrop open={open} sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }} >
          <CircularProgress sx={{ color: red[500] }} />
      </Backdrop>
  )
}
