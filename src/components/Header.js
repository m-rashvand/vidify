import useMediaQuery from '@mui/material/useMediaQuery';
import { AppBar, Box, Button, Toolbar, IconButton, Drawer, Stack, Link } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import logo from '../images/logo.png'
import { useState } from 'react';


const Header = () => {

    const menuButton = { fontWeight: 700, size: "18px", ml: 2.5, color: "white" };
    const openMenuButton = { ...menuButton, px: 5, mt: 2, ml: 0 };
    const mobileView = useMediaQuery('(min-width:701px)');
    const [open, setOpen] = useState(false);

    const buttons = () => {
        return (
            <Stack direction={open && !mobileView ? "column" : "row"} >
                <Button fullWidth sx={open && !mobileView ? openMenuButton : menuButton}
                    href={'/movie'}>
                    {'Movie'}
                </Button> 
                <Button fullWidth sx={open && !mobileView ? openMenuButton : menuButton}
                    href={'/series'}>
                    {'Series'}
                </Button>
                <Box sx={{borderTop: (theme) => `1px solid ${theme.palette.divider}`,}}></Box>
                
                <Button fullWidth sx={open && !mobileView ? openMenuButton : menuButton}
                    href={'/login'}>
                    {'Login'}
                </Button>
                <Button fullWidth sx={open && !mobileView ? openMenuButton : menuButton}
                    href={'/signup'} variant="contained" color="error">
                    {'Signup'}
                </Button>
            </Stack>
        );
    }

    const displayMobile = () => {

        const menuClick = () => {
            setOpen(!open);
        }
        
        return (
          <Toolbar sx={{ background: '#111827' }}>
            <IconButton sx={{ ...menuButton, ml: -2, transform: 'translateY(-100%)',}} edge="start" 
                    color="inherit" aria-label="menu" onClick={menuClick}
                >
                    <MenuIcon />
                </IconButton>
                <Drawer anchor="left" open={open} onClose={menuClick}>
                    <div>{buttons()}</div>
                </Drawer>
            <div style={{ width: '100%'}}>
                <Link component="a" href='/'>
                    <Box
                        component="img"
                        sx={{
                            height: 127,
                            width: 140,
                            my: 2,
                            display: 'block',
                            textAlign: 'center',
                            mx: 'auto',
                        }}
                        alt="logo"
                        src={logo}
                    />
                </Link>
                </div>
            </Toolbar>
        );
    };

    const displayDesktop = () => {
        return (
          <Toolbar sx={{ display: "flex", justifyContent: "space-between", background: '#111827'}}>
            <Link component="a" href='/'>
                <Box
                    component="img"
                    sx={{
                        height: 73,
                        width: 80,
                        my: 2
                    }}
                    alt="logo"
                    src={logo}
                    href='#'
                />
            </Link>
                <div>
                    {buttons()}
                </div>
            </Toolbar>
        );
    };

    return (
      <AppBar sx={{ pr: 6, pl: 4, background: '#111827',
            "@media (max-width: 700px)": {pl: 1,} }}>
            {mobileView ? displayDesktop() : displayMobile()}
        </AppBar>

  )
}



export default Header