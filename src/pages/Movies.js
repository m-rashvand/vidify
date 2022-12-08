import { Box, Card, Grid, Typography } from '@mui/material';
import { AccessTime, Assistant, AttachMoney, DateRange, Info, Language, Paid, People, Translate } from '@mui/icons-material';
import { useParams } from 'react-router-dom';

import Footer from '../components/Footer';
import useFetch from '../hooks/useFetch';
import { MovieBanner } from '../components/MovieBanner';
import { MovieScrollBar } from '../components/MovieScrollBar';
import { MovieDataWidget } from '../components/MovieDataWidget';
import { LoadingProgressBar } from '../components/LoadingProgressBar';


export const Movies = ( ) => {

    const token = require('../TOKEN').key;
    const { id } = useParams();

    const { data, loading, error } = useFetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${token}&language=en&append_to_response=credits`
    );
    
    const money = (amount) => {
        if (amount === 0) 
            return '‌ -'
        else if (amount < 1000000)
            return `${(amount / 1000).toPrecision(4)} K`
        else if (amount < 1000000000)
            return `${(amount / 1000000).toPrecision(4)} M`
        else 
            return `${(amount / 1000000000).toPrecision(4)} B`
    };

    const toHour = (minutes) => {
        return `${ Math.floor(minutes / 60) } hr ${ minutes % 60} min`
    };

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
                            <MovieDataWidget logo={<DateRange />} title='Release Date' content={data.release_date.slice(0, 4)} />
                            <MovieDataWidget logo={<AccessTime />} title='Runtime' content={toHour(data.runtime)} />
                            <MovieDataWidget logo={<Paid />} title='Budget' content={money(data.budget)} />
                            <MovieDataWidget logo={<AttachMoney />} title='Revenue' content={money(data.revenue)} />
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

                    <MovieScrollBar apiType={`movie/${id}/recommendations`} />
                </>
                }
                
            </Box>
            <Footer/>
      </Card>

  )
}
