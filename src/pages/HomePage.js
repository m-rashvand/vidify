import { Button, Card, CardContent, Grid, Typography, CardMedia, CardActions } from '@mui/material';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import UpcomingOutlinedIcon from '@mui/icons-material/UpcomingOutlined';
import LocalFireDepartmentOutlinedIcon from '@mui/icons-material/LocalFireDepartmentOutlined';
import QuestionAnswerOutlinedIcon from '@mui/icons-material/QuestionAnswerOutlined';

import { ExpandMorePanel } from '../components/ExpandMorePanel';
import { MovieScrollBar } from '../components/MovieScrollBar';
import Footer from '../components/Footer';
import logo from '../images/logo.png'


export const HomePage = () => {
    const plans = [
        {
            number: '+16,000',
            description: 'Users'
        }, {
            number: '+400K',
            description: 'Movies and series'
        }, {
            number: '24h',
            description: 'online Support'
        },
    ];

    return (
        <Card component="main" >
        
            <Typography component="h3" variant="h4" sx={{ pt: { xs: 21, md: 16 }, m: 3 }}>
                <UpcomingOutlinedIcon />
                {' Featured & Coming Soon'}
            </Typography>
            <MovieScrollBar apiType='movie/upcoming' />

            <Typography component="h3" variant="h4" sx={{ m: 3 }}>
                <StarBorderOutlinedIcon />
                {' Popular'}
            </Typography>
            <MovieScrollBar apiType='movie/popular'/>

            <Typography component="h3" variant="h4" sx={{ m: 3 }}>
                <LocalFireDepartmentOutlinedIcon />
                {' Top Rated'}
            </Typography>
            <MovieScrollBar apiType='movie/top_rated' />

            <Card sx={{ width: '90%', alignItems: 'center', transform: 'translateX(5%)', }}>
                <Typography component="h3" variant="h5" sx={{ m: 1 }}>
                    <QuestionAnswerOutlinedIcon />
                    {' Frequently Asked Questions'}
                </Typography>
                <ExpandMorePanel question="What's Vidify?"
                    answer='Vidify is the premier search and discovery web app for TV Shows & Movies on the web, your phone, tablet or smart tv.' />
                <ExpandMorePanel question="How to use Vidify?"
                    answer='You can get access to Vidify by buying our subscription without limitation.' />
                <ExpandMorePanel question="Can I refunding my order?"
                    answer='Yes, you can receive a refund before expiration of the 7 day trial.' />
            </Card>

            <Card sx={{ mx: 4,  my: 6 }}>
                <CardMedia>
                <img
                    src={logo}
                    width = '20%'
                    alt={'logo'}
                        style={{ margin: '10px', transform: 'translateX(190%)' }}
                />
                </CardMedia>
                <CardContent>
                    <Grid container spacing={1.5} alignItems="flex-end">
                        {plans.map((plan, index) => (
                            <Grid item key={index} xs={12} sm={12} md={4}>
                                <Card variant="outlined" sx={{borderRadius: 4}}>
                                    <CardContent>
                                        <Typography component="h2" variant="h3" color="text.primary" sx={{ "@media (max-width: 900px)": { textAlign: "center" } }}>
                                            {plan.number}
                                        </Typography>
                                        <Typography component="h3" variant="subtitle1" sx={{ "@media (max-width: 900px)": { textAlign: "center" }}}>
                                            {plan.description}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </CardContent>
                <CardActions>
                    <Button variant='contained' size='large' href='/signup' sx={{ mb: 6, top: 20, left: '50%', transform: 'translateX(-50%)' }}>
                        {'Get Started'}
                    </Button>
                </CardActions>
            </Card>
            <Footer />
        </Card>
    )
}
