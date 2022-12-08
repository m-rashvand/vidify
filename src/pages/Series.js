import { Box, Card, Grid, Typography } from '@mui/material';
import { Assistant, DateRange, Info, Language, LiveTv, Numbers, People, Translate } from '@mui/icons-material';
import { useParams } from 'react-router-dom';

import useFetch from '../hooks/useFetch';
import Footer from '../components/Footer';
import { MovieBanner } from '../components/MovieBanner';
import { MovieScrollBar } from '../components/MovieScrollBar';
import { MovieDataWidget } from '../components/MovieDataWidget';
import { LoadingProgressBar } from '../components/LoadingProgressBar';


export const Series = () => {

    const token = require('../TOKEN').key;
    const { id } = useParams();

    const { data, loading, error } = useFetch(
        `https://api.themoviedb.org/3/tv/${id}?api_key=${token}&language=en&append_to_response=credits`
    );

    const listToString = (list) => {
        return list.map(i => {return i.name }).join(', ');
    };

    return (
        <Card component="main" >
            <Box sx={{ pt: { xs: 20, md: 14 }, }}>
                <LoadingProgressBar open={loading} />
                {error && (
                    <div>{`There is a problem fetching the post data - ${error}`}</div>
                )}
                {data && <MovieBanner data={data} /> }
                {data && 
                <>
                    <Box sx={{ mx: { xs: 8, sm: 15, md: 18, lg: 24}, mt:5 }}>
                        <Grid container rowSpacing={2.5} justifyContent='space-between'
                            columnSpacing={{ xs: 2, sm: 5, md: 10, lg: 15 }} >
                            <MovieDataWidget logo={<Language />} title='Country' content={listToString(data.production_countries)} /*{data.production_countries.map(i => i.name + ', ')}*/ />
                            <MovieDataWidget logo={<Translate />} title='Language' content={data.original_language} />
                            <MovieDataWidget logo={<DateRange />} title='First Air Date' content={data.first_air_date.slice(0, 4)} />
                            <MovieDataWidget logo={<LiveTv />} title='Network' content={listToString(data.networks)} />
                            <MovieDataWidget logo={<Numbers />} title='Episodes' content={data.number_of_episodes} />
                            <MovieDataWidget logo={<Info />} title='Status' content={data.status} />
                        </Grid>
                        <Grid container justifyContent='space-around' sx={{mt: 3}} >
                            <MovieDataWidget logo={<People />} title='Cast' content={listToString(data.credits.cast.slice(0, 10))} />
                        </Grid>
                    </Box>
                    <Typography component="h4" variant="h5" sx={{ m: 3 }}>
                            <Assistant />
                            {' You Might Also Like'}
                    </Typography>

                    <MovieScrollBar apiType={`tv/${id}/recommendations`} />
                </>
                }
            </Box>
            <Footer/>
      </Card>
  )
}
