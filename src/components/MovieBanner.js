import { Star } from '@mui/icons-material'
import { Box, Grid, Typography } from '@mui/material'
import { yellow } from '@mui/material/colors'

export const MovieBanner = ( {data} ) => {
    const { poster_path, backdrop_path, title, name, tagline, genres, vote_average, overview } = data;
    
    return (
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, backgroundSize: '100%', backgroundRepeat: 'no-repeat', backgroundImage: `linear-gradient(transparent, transparent, black), url(https://image.tmdb.org/t/p/original/${backdrop_path})`, width: '100vw' }}>
            <Box sx={{ mx: { xs: 2, md: 10, lg: 15 }, mt: 20, }}>
                <Grid container spacing={1.5} alignItems="center" justifyContent='space-between' sx={{ background: 'linear-gradient(to top, black, rgba(0,0,0, 0.8), rgba(0,0,0, 0.5), transparent)' }}>
                    <Grid item xs>
                        <Box
                            component="img"
                            sx={{ position: 'relative', width: { xs: '60%', md: '90%' }, left: { xs: '20%', md: '5%' }, mb: { sm: 0, md: 3 } }}
                            src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
                            alt={title ? title : name}
                        />
                    </Grid>
                    <Grid item container xs={12} sm={12} md={8} lg={8} sx={{ mb: 3 }}>
                        <Grid item xs={12}>
                            <Typography component="div" variant="h5">
                                {title ? title : name}
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant="subtitle2" color="text.secondary" component="div">
                                {tagline}
                            </Typography>
                        </Grid>
                        <Grid item container xs={12}>
                            <Grid item xs={9}>
                                {genres.slice(0, 3).map(({ name }) => {
                                    return `•  ${name}  `
                                })}
                            </Grid>
                            <Grid item xs>
                                <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '60px' }}>
                                    <Star sx={{ color: yellow[500] }} />

                                    <Typography component="p" variant="subtitle1">
                                        {vote_average === 0 ? "-" : vote_average.toPrecision(2)}
                                    </Typography>

                                </Box>
                            </Grid>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant="subtitle2" color="text.secondary" component="div">
                                {overview}
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    )
}
