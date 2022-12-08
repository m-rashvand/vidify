import { Box, CircularProgress, IconButton, ImageListItem, ImageListItemBar, Typography } from '@mui/material'
import { PlayCircleFilledWhiteOutlined, Star } from '@mui/icons-material';
import { yellow, red } from '@mui/material/colors'
import ScrollBar from './ScrollBar'
import useFetch from '../hooks/useFetch';


export const MovieScrollBar = ( { apiType } ) => {

    const token = require('../TOKEN').key 
    const { data, loading, error } = useFetch(
        `https://api.themoviedb.org/3/${apiType}?api_key=${token}&language=en`
    );

    return (
        <Box sx={{ mx: {xs: 0.3, md: 5}, mb: 10 }}>
            <ScrollBar >
                {loading && <CircularProgress sx={{ color: red[500]}} />}
                {error && (
                    <div>{`There is a problem fetching the data From API - ${error}`}</div>
                )}
                {data && (data.total_results  === 0 ? (<div>{'There is Nothing to Show in Here.'}</div>) : (data.results.map(({ id, title, poster_path, vote_average, name, }) => (
                    <ImageListItem key={id} sx={[{ mx: 0.5, md: { mx: 2 } }, { '&:hover': { px: 0.5 }, }]}>
                        <img
                            src={`https://image.tmdb.org/t/p/w400/${poster_path}`}
                            alt={title ? title : name}
                            // loading="lazy"
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
                                <IconButton href={apiType.includes('movie') ? `/movie/${id}` : `/series/${id}`} >
                                    <PlayCircleFilledWhiteOutlined fontSize='large' sx={{ color: red[600] }} />
                                </IconButton>
                            }
                        />
                    </ImageListItem>
                ))))}
            </ScrollBar>
        </Box>
    )
}
