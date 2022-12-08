import { useState } from 'react';
import { Avatar, Box, Button, Card, CardContent, Switch, Grid, Tab, Tabs, TextField, Typography, Divider, CardActions, Container, CardHeader } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import { East, FiberManualRecord } from '@mui/icons-material';
import TabPanel from '../components/TabPanel';


export const Acounts = () => {

    const [tabValue, setTabValue] = useState(0);

    const handleTabChange = (event, newValue) => {
        setTabValue(newValue);
    };

    const plans = [
        {
            title: 'Free',
            price: '0',
            description: [
                'Access to Vidify DB',
                'Access to news & reviews',
            ],
            buttonText: 'Get started',
            buttonVariant: 'outlined',
        },
        {
            title: 'Silver',
            subheader: 'Most popular',
            price: '10',
            description: [
                'All Free plan features',
                '+ Access to Vidify streaming',
            ],
            buttonText: 'Get started',
            buttonVariant: 'contained',
        },
        {
            title: 'Gold',
            price: '20',
            description: [
                'All Silver plan features',
                '+ Download movies and series',
            ],
            buttonText: 'Get started',
            buttonVariant: 'outlined',
        },
    ];


    return (
        <Box sx={{ display: 'flex', }}>
            <CssBaseline />

            <Box
                component="main"
                sx={{
                    backgroundColor: (theme) =>
                        theme.palette.mode === 'light'
                            ? theme.palette.grey[100]
                            : theme.palette.grey[900],
                    flexGrow: 1,
                    height: '100vh',
                    overflow: 'auto',
                }}
            >
                <Typography component='h1' variant='h3' sx={{ pt: { xs: 21, md: 16 }, ml: '10%', mb: 5 }}>Account</Typography>

                <Box sx={{ width: '80%', mx: '10%', }}>
                    <Tabs value={tabValue} onChange={handleTabChange}>
                        <Tab label="Account" />
                        <Tab label="Billing" />
                        <Tab label="Notifications" />
                        <Tab label="Security" />
                    </Tabs>
                </Box>

                <TabPanel value={tabValue} index={0}>
                    <Card sx={{ "@media (min-width: 900px)": { width: '80%', borderRadius: 1.5, pt: 5, px: 3, py: 4, mx: '10%' }, mb:5 }}>

                    <CardContent>
                        <Grid container spacing={2} alignItems='flex-start'>
                            <Grid item xs={12} md={3}>
                                <Typography  variant='h5'>
                                    {'Basic details'}
                                </Typography>
                            </Grid>

                            <Grid container item xs={12} md={9}>
                                <Grid item xs={2}>
                                    <Avatar sx={{ width: 64, height: 64, mb:3, display: 'block' }} alt={'notification.alt'} src={'https://mui.com/static/images/avatar/2.jpg'} />
                                </Grid>

                                <Grid item xs={3} >
                                    <Button size='large' sx={{ alignContent: 'center', ml:2, mt:1.5 }}>
                                        {'Change'}
                                    </Button>
                                </Grid>

                                <Grid item xs={11} sx={{ mt: 1 }}>
                                    <TextField size="small" fullWidth label="Full Name" variant="outlined"  />
                                </Grid>

                                <Grid item xs={11}>
                                        <TextField size="small" fullWidth label="Email Adress" variant="outlined" sx={{ mt: 2 }} />
                                </Grid>

                                <Grid item xs={12} sx={{my:1.5}}>
                                    <Typography variant='h6'>
                                        {'About (optional)'}
                                    </Typography>
                                </Grid>

                                <Grid item xs={11}>
                                        <TextField fullWidth multiline rows={3}/>
                                </Grid>
                                <Grid item xs={2} sx={{my:2}}>
                                    <Button variant='contained' size='large'>
                                        {'save'}
                                    </Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </CardContent>
                    </Card>   

                    <Card sx={{ "@media (min-width: 900px)": { width: '80%', borderRadius: 1.5, pt: 5, px: 3, py: 4, mx: '10%' } }}>
                        <CardContent>
                            <Grid container spacing={2} alignItems='flex-start'>
                                <Grid item xs={12} md={3}>
                                    <Typography variant='h5'>
                                        {'Delete Account'}
                                    </Typography>
                                </Grid>

                                <Grid container item xs={12} md={9}>
                                    <Grid item xs={12} >
                                        <Typography variant='body1'>
                                            {'Delete your account and all of your source data. This is irreversible'}
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={12} sx={{ my: 2 }}>
                                        <Button color='error' variant='outlined'>
                                            {'Delete Account'}
                                        </Button>
                                    </Grid>


                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </TabPanel>

                <TabPanel value={tabValue} index={1}>
                    <Card sx={{ "@media (min-width: 900px)": { width: '80%', borderRadius: 1.5, pt: 5, px: 3, py: 4, mx: '10%' }, mb: 5 }}>
                        <CardContent>
                            <Container maxWidth="md" component="main" >
                                <Grid container spacing={5} alignItems="flex-end">
                                    <Grid item xs={12}>
                                        <Typography variant='h5'>
                                            {'Change plan'}
                                        </Typography>
                                        <Typography variant='subtitle1' color="text.secondary">
                                            {'You can upgrade whenever you want'}
                                        </Typography>
                                    </Grid>
                                    {plans.map((plan) => (
                                        <Grid item key={plan.title} xs={12}
                                            sm={plan.title === 'three' ? 12 : 6} md={4}
                                        >
                                            <Card>
                                                <CardHeader
                                                    title={plan.title} subheader={plan.subheader}
                                                    titleTypographyProps={{ align: 'center' }}
                                                    action={null}
                                                    subheaderTypographyProps={{
                                                        align: 'center',
                                                    }}
                                                    sx={{
                                                        backgroundColor: (theme) =>
                                                            theme.palette.mode === 'light'
                                                                ? theme.palette.grey[200]
                                                                : theme.palette.grey[700],
                                                    }}
                                                />
                                                <CardContent>
                                                    <Box
                                                        sx={{
                                                            display: 'flex',
                                                            justifyContent: 'center',
                                                            alignItems: 'baseline',
                                                            mb: 2,
                                                        }}
                                                    >
                                                        <Typography component="h2" variant="h3" color="text.primary">
                                                            ${plan.price}
                                                        </Typography>
                                                        <Typography variant="h6" color="text.secondary">
                                                            /mo
                                                        </Typography>
                                                    </Box>
                                                    <ul style={{ margin: 0, padding: 0, listStyle: 'none' }}>
                                                        {plan.description.map((line) => (
                                                            <Typography
                                                                component="li"
                                                                variant="subtitle1"
                                                                align="center"
                                                                key={line}
                                                            >
                                                                {line}
                                                            </Typography>
                                                        ))}
                                                    </ul>
                                                </CardContent>
                                                <CardActions>
                                                    <Button fullWidth variant={plan.buttonVariant}>
                                                        {plan.buttonText}
                                                    </Button>
                                                </CardActions>
                                            </Card>
                                        </Grid>
                                    ))}
                                </Grid>
                            </Container>
                        </CardContent>
                    </Card>
                </TabPanel>
                
                <TabPanel value={tabValue} index={2}>
                    <Card sx={{ "@media (min-width: 900px)": { width: '80%', borderRadius: 1.5, pt: 5, px: 3, py: 4, mx: '10%' }, mb: 5 }}>
                        <CardContent>
                            <Grid container spacing={2} alignItems='flex-start'>
                                <Grid item xs={12} md={3}>
                                    <Typography variant='h5'>
                                        {'Email Notification'}
                                    </Typography>
                                </Grid>

                                <Grid container item xs={12} md={9}>
                                    <Grid item xs={10} >
                                        <Typography variant='body1'>
                                            {'Product updates'}
                                        </Typography>
                                        <Typography variant='caption'>
                                            {'News, announcements, and Movies updates.'}
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={2} >
                                        <Switch />
                                    </Grid>

                                    <Grid item xs={12} sx={{ my: 2 }} >
                                        <Divider />
                                    </Grid>

                                    <Grid item xs={10} >
                                        <Typography variant='body1'>
                                            {'Security updates'}
                                        </Typography>
                                        <Typography variant='caption'>
                                            {'Important notifications about your account security.'}
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={2} >
                                        <Switch />
                                    </Grid>

                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </TabPanel>

                <TabPanel value={tabValue} index={3}>
                    <Card sx={{ "@media (min-width: 900px)": { width: '80%', borderRadius: 1.5, pt: 5, px: 3, py: 4, mx: '10%' }, mb: 5 }}>
                        <CardContent>
                            <Grid container spacing={2} alignItems='flex-start'>
                                <Grid item xs={12} md={3}>
                                    <Typography variant='h5'>
                                        {'Change password'}
                                    </Typography>
                                </Grid>

                                <Grid container item xs={12} md={9}>
                                    <Grid item xs={11} sx={{ mt: 1 }}>
                                        <TextField size="small" fullWidth label="Old Password" variant="outlined" />
                                    </Grid>

                                    <Grid item xs={11}>
                                        <TextField size="small" fullWidth label="New Password" variant="outlined" sx={{ mt: 2 }} />
                                    </Grid>
                                    <Grid item xs={11}>
                                        <TextField size="small" fullWidth label="Repeat Password" variant="outlined" sx={{ mt: 2 }} />
                                    </Grid>

                                    <Grid item xs={2} sx={{ mt: 3 }}>
                                        <Button variant='contained' size='large'>
                                            {'save'}
                                        </Button>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>

                    <Card sx={{ "@media (min-width: 900px)": { width: '80%', borderRadius: 1.5, pt: 5, px: 3, py: 4, mx: '10%' }, mb: 5 }}>
                        <CardContent>
                            <Grid container spacing={2} alignItems='flex-start'>
                                <Grid item xs={12} >
                                    <Typography variant='h5'>
                                        {'Tow Factor Authentication'}
                                    </Typography>
                                </Grid>

                                <Grid container spacing={4} item xs={12}>
                                    <Grid item xs={12} sm={6} sx={{ mt: 1 }}>
                                        <Card>
                                            <CardContent>
                                                <div style={{ display: 'flex'}}>
                                                    <FiberManualRecord fontSize='30px' color='error' sx={{mt:0.8, mr: 1}} />
                                                    <Typography variant='subtitle1' color='error'>
                                                        {'off'}
                                                    </Typography>
                                                </div>
                                                <Typography variant='h6'>
                                                    {'Authenticator App'}
                                                </Typography>
                                                <Typography variant='caption'>
                                                    {'Use an authenticator app to generate one time security codes.'}
                                                </Typography>
                                            </CardContent>
                                            <CardActions>
                                                <Button variant='outlined' sx={{ ml:2, mb: 3 }}>
                                                    {'set up'}
                                                    <East/>
                                                </Button>
                                            </CardActions>
                                        </Card>
                                    </Grid>

                                    <Grid item xs={12} sm={6} sx={{ mt: 1 }}>
                                        <Card>
                                            <CardContent>
                                                <div style={{ display: 'flex' }}>
                                                    <FiberManualRecord fontSize='30px' color='success' sx={{ mt: 0.8, mr: 1 }} />
                                                    <Typography variant='subtitle1' color='green'>
                                                        {'on'}
                                                    </Typography>
                                                </div>
                                                <Typography variant='h6'>
                                                    {'Text Message'}
                                                </Typography>
                                                <Typography variant='caption'>
                                                    {'Use your mobile phone to receive security codes via SMS.'}
                                                </Typography>
                                            </CardContent>
                                            <CardActions>
                                                <Button variant='outlined' sx={{ ml: 2, mb: 3 }}>
                                                    {'set up'}
                                                    <East />
                                                </Button>
                                            </CardActions>
                                        </Card>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </TabPanel>
            </Box>
        </Box>
  )
}

export default Acounts;