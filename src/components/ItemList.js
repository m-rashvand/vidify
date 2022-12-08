import { PlayCircleFilledWhiteOutlined, Star } from '@mui/icons-material'
import { Box, Grid, IconButton, ImageListItem, ImageListItemBar, Typography } from '@mui/material'
import { red, yellow } from '@mui/material/colors'

export const ItemList = ({ data, type }) => {

    return (
        <Grid container rowSpacing={3.5} justifyContent='space-evenly'
            columnSpacing={{ xs: 2, sm: 8, md: 8, lg: 10 }}>
            {data.results.map(({ id, title, poster_path, vote_average, name, }) => (
                <Grid item key={id} xs={12} sm={6} md={4} lg={3} >
                    <ImageListItem sx={[{ mx: 0.5 },
                    { '&:hover': { px: 0.5 }, }]}>
                        <img
                            src={`https://image.tmdb.org/t/p/w400/${poster_path}`}
                            alt={title ? title : name}
                            draggable={false}
                        />

                        <ImageListItemBar
                            title={title ? title : name}
                            subtitle={
                                <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '60px' }}>
                                    <Star sx={{ color: yellow[500] }} />

                                    <Typography component="p" variant="subtitle1">
                                        {vote_average === 0 ? "-" : vote_average.toPrecision(2)}
                                    </Typography>
                                </Box>
                            }
                            actionIcon={
                                <IconButton href={type === 'm' ? `/movie/${id}` : `/series/${id}`} >
                                    <PlayCircleFilledWhiteOutlined fontSize='large' sx={{ color: red[600] }} />
                                </IconButton>
                            }
                        />
                    </ImageListItem>
                </Grid>
            ))}
            
        </Grid>
    )
}
