import { Container, Grid, Typography, Link } from '@mui/material/';


export const Footer = () => {

    const footers = [
        {
            title: 'Company',
            description: ['Blog', 'Jobs', 'About Us',],
        },
        {
            title: 'Top Rated',
            description: ['Top 250 Movies', 'Most Popular Movies', 'Top Box Office', 'Best of 2022'],
        },
        {
            title: 'News and Critics',
            description: ['Movies', 'Series', 'Box Office', 'Ratings Information'],
        },
        {
            title: 'Support',
            description: ['Help Center', 'Privacy Policy', 'Terms of Use'],
        },
    ];

    return (
        <Container
            component="footer"
            sx={{
                borderTop: (theme) => `1px solid ${theme.palette.divider}`,
                mt: 8,
                py: 4,
                px: 2,
            }}
        >
            <Grid container spacing={4} justifyContent="space-evenly">
                {footers.map((footer) => (
                    <Grid item xs={12} sm={6} md={3} key={footer.title}>
                        <Typography variant="h6" color="text.primary" gutterBottom>
                            {footer.title}
                        </Typography>
                    <ul style={{ listStyle: 'none' }}>
                            {footer.description.map((item) => (
                                <li key={item}>
                                    <Link href="#" variant="subtitle1" color="text.secondary">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </Grid>
                ))}
                <Grid item xs={12}>
                    <Typography variant="subtitle2" color="text.secondary">
                        {'Copyright 2022 Vidify'}
                    </Typography>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Footer
