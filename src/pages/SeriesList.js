import { Box, Card, Grid, Pagination } from '@mui/material'
import { useState } from 'react';
import { ItemList } from '../components/ItemList';
import { LoadingProgressBar } from '../components/LoadingProgressBar';
import Footer from '../components/Footer';
import useFetch from '../hooks/useFetch';

export const SeriesList = () => {

    const [page, setPage] = useState(1);
    const handleChange = (e, value) => {
        setPage(value);
    };

    const token = require('../TOKEN').key;
    const { data, loading, error } = useFetch(
        `https://api.themoviedb.org/3/tv/popular?api_key=${token}&language=en&&page=${page}`
    );

    return (
        <Card component="main" >
            <Box sx={{ pt: { xs: 23, md: 17 }, mx: {xs: 1.5, md: 5}, mb: 10  }}>
                <LoadingProgressBar open={loading} />
                {error && (
                    <div>{`There is a problem fetching the post data - ${error}`}</div>
                )}
                
                {data && <>
                    <ItemList data={data} type='s' />
                    <Grid container sx={{ mt: 3 }} justifyContent='space-evenly' >
                        <Pagination count={data.total_pages} size="large" page={page} href='#' onChange={handleChange} />
                    </Grid>
                </>}
            </Box>
            <Footer />
        </Card>
    )
    
}
