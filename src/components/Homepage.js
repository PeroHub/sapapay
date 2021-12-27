import { Link, Outlet } from "react-router-dom"
import Container from '@mui/material/Container';
// import Typography from '@mui/material/Typography';
// import Avatar from '@mui/material/Avatar';
// import Grid from '@mui/material/Grid';
// import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

import '../App.css';
import { useState } from 'react';
import { styled, useTheme } from '@mui/material/styles';

import Avatar from '@mui/material/Avatar';

import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import IconButton from '@mui/material/IconButton';



import sapapay from '../images/sapapay.svg'
import family from '../images/Familyorange.png'


import Footer from './Footer';


const drawerWidth = 240;

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-start',
}));


export default function Homepage() {

    const theme = useTheme();
  const [open, setOpen ] = useState(false)

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
    return (
       <div>
           <Box>
       {/* <Countdowntimer /> */}
      <Box style={{display: "flex", justifyContent: "space-around"}}>
          <Box>
            <Link to="/" style={{ textDecoration: 'none' }}>
                    <Stack direction="row" sx={{justifyContent: 'center', alignItems: "center", position: "relative", right: {xs : '30%', md: "-10%"}, mt: 4}} spacing={1}>
                        <Avatar alt="logo" src={sapapay} />
                        <Typography sx={{color: "#FF4500"}}>Sapapay</Typography>
                    </Stack>
                </Link>
          </Box>
          <MenuIcon 
            sx={{display: {md: "none", sm: "none"}, mt: 5, cursor: "pointer"}} 
            onClick={handleDrawerOpen}
          />
          <Box sx={{mt: 4, display: {xs: "none", md: "block"}}}>
            <Stack direction="row">
              <Button>Login</Button>
              <Link to="/signup" style={{textDecoration: "none"}}>
                <Button>Sign Up</Button>
              </Link>
              <Button>About US</Button>
              <Button>Listing Page</Button>
            </Stack>
          </Box>

          <Drawer
            sx={{
              width: drawerWidth,
              position: "absolute",
              flexShrink: 0,
              '& .MuiDrawer-paper': {
                width: drawerWidth,
              },
            }}
            variant="persistent"
            anchor="right"
            open={open}
          >
            <DrawerHeader>
              <IconButton onClick={handleDrawerClose}>
                {theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
              </IconButton>
            </DrawerHeader>
            <Box>
              <Stack alignItems="center">
                
                <Link to="/login" style={{textDecoration: "none"}}>
                    <Button>Login</Button>
                </Link>
                <Link to="/signup" style={{textDecoration: "none"}}>
                    <Button>Sign Up</Button>
                </Link>
                <Link to="/aboutus" style={{textDecoration: "none"}}>
                    <Button>About US</Button>
                </Link>
                <Link to="/listing" style={{textDecoration: "none"}}>
                    <Button>Listing Page</Button>
                </Link>
                
              </Stack>
          </Box>
      </Drawer>
        </Box>
        
       <Outlet />
      
    </Box>
            <Container component="main">
            <Box sx={{ mt: 8}}>
                <Grid container spacing={2} alignItem="center" justifyContent="center">
                    <Grid item>
                        <Box sx={{ height: "300px",display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
                            <Typography>--Change the way you earn</Typography>
                            <Typography sx={{fontSize: "1.2rem", fontWeight: "bold", p: 2}}>Get your Business seen by <br /> Investors, partners and Sponsors.</Typography>
                        </Box>
                    </Grid>
                    <Grid item>
                        <Box sx={{width: "300px", height: "300px"}}>
                            <Avatar src={family} alt="family" sx={{width: 'inherit', height: "inherit"}} />
                        </Box>
                    </Grid>
                </Grid>
            </Box>
            <Box></Box>
            <Box></Box>
            <Box></Box>
            <Box></Box>
            <Box></Box>
            <Box></Box>
            <Box></Box>
            <Box></Box>
            <Box></Box>
            <Box></Box>
           
        </Container>
        <Footer />
       </div>
        
    )
}