import { Link, Outlet } from "react-router-dom"
import Container from '@mui/material/Container';
// import Typography from '@mui/material/Typography';
// import Avatar from '@mui/material/Avatar';
// import Grid from '@mui/material/Grid';
// import Button from '@mui/material/Button';


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
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import sapapay from '../images/sapapay.svg'
import family from '../images/Familyorange.png'
import piechart from '../images/piechart.png'
import peer from '../images/peer.png'
import carrot from '../images/carrot.png'
import cake from '../images/cake.png'
import plantain from '../images/plantain.png'
import payment from '../images/payment.svg'

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
              <Link to="/listing"style={{textDecoration: "none"}} >
                <Button>Listing Page</Button>
              </Link>
             
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
                    <Grid item xs={12} md={6}>
                        <Box sx={{ height: "300px",display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
                            <Typography sx={{fontSize: "1.2rem", fontWeight: "bold"}}>Change the way you earn</Typography>
                            <Typography sx={{p: 2, textAlign: "center"}}>Get your Business seen by <br /> Investors, partners and Sponsors.</Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6} sx={{display: "flex",  justifyContent: "center", alignItems: "center"}}>
                        <Box sx={{width: "300px", height: "300px"}}>
                            <Avatar src={family} alt="family" sx={{width: 'inherit', height: "inherit"}} />
                        </Box>
                    </Grid>
                </Grid>
            </Box>
            <Box sx={{ mt: 20}}>
                <Grid container spacing={2} alignItem="center" justifyContent="center">
                    <Grid item xs={12} md={6}>
                        <Box sx={{ height: "300px",display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
                            <Typography sx={{fontWeight: "bold", fontSize: "1.2rem"}}>Empowerments</Typography>
                            <Typography sx={{ p: 2}}>Empowerment has been the subject of widespread and often thoughtful and careful theorizing, 
                            study, and application in the fields of social work, community psychology, health promotion, and organizational studies.
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6} sx={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                        <Box sx={{width: "300px", height: "300px"}}>
                            <Avatar src={piechart} alt="piechart" sx={{width: 'inherit', height: "inherit"}} />
                        </Box>
                    </Grid>
                </Grid>
            </Box>
            <Box sx={{ mt: 24}}>
                <Grid container spacing={2} alignItem="center" justifyContent="center">
                    <Grid item xs={12} md={6}>
                        <Box sx={{ height: "300px",display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
                            <Typography sx={{fontWeight: "bold", fontSize: "1.2rem"}}>Ads and Listing</Typography>
                            <Typography sx={{ p: 2}}>Sapapay helps to list  your business. For experienced users, the building of a simple advertising model takes less than an hour.
                              In the case of positioning the website, the effects are not so fast.
                              They are visible even after a few weeks. 
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6} sx={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                        <Box sx={{width: "400px", height: "300px"}}>
                            <Avatar src={peer} alt="peer to peer" sx={{width: 'inherit', height: "inherit"}} />
                        </Box>
                    </Grid>
                </Grid>
            </Box>
            <Box sx={{ mt: 20, borderRadius: "10px", p: 4, boxShadow: " 0px 10px 15px -3px rgba(0,0,0,0.1),0px 10px 15px -3px rgba(0,0,0,0.1),0px 10px 15px -3px rgba(0,0,0,0.1);"}}>
            <Typography sx={{textAlign: "center", fontSize: "1.5rem", mb: 4}}>Our Recommended Ads</Typography>
                <Grid container spacing={2} alignItem="center" justifyContent="center">
                    <Grid item xs={12} md={4} sx={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                        <Card sx={{borderBottomLeftRadius: "30px", borderBottomRightRadius: "30px"}}>
                          <CardMedia
                          component="img"
                          image={carrot} 
                          height="193"
                          alt="carrot"
                          />
                          <CardContent sx={{ background: "#272727"}}>
                            <Typography sx={{color: "#fff", textAlign: "center", fontWeight: "bold"}}>John Carrots</Typography>
                          </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} md={4} sx={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                    <Card sx={{borderBottomLeftRadius: "30px", borderBottomRightRadius: "30px"}}>
                          <CardMedia
                          component="img"
                          image={cake} 
                          height="193"
                          alt="cake"
                          />
                          <CardContent sx={{ background: "#272727"}}>
                            <Typography sx={{color: "#fff", textAlign: "center", fontWeight: "bold"}}>Lizzy Cakes</Typography>
                          </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} md={4} sx={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                    <Card sx={{borderBottomLeftRadius: "30px", borderBottomRightRadius: "30px"}}>
                          <CardMedia
                          component="img"
                          image={plantain} 
                          height="193"
                          alt="cake"
                          />
                          <CardContent sx={{ background: "#272727"}}>
                            <Typography sx={{color: "#fff", textAlign: "center", fontWeight: "bold"}}>Yemi's Plaintain</Typography>
                          </CardContent>
                        </Card>
                    </Grid>
                   
                </Grid>
            </Box>
            <Box sx={{ mt: 20, mb: 20}}>
                <Grid container spacing={2} alignItem="center" justifyContent="center">
                    <Grid item xs={12} md={6}>
                        <Box sx={{ height: "300px",display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
                            <Typography sx={{fontWeight: "bold", fontSize: "1.2rem"}}>Ads and Listing</Typography>
                            <Typography sx={{ p: 2}}>Sapapay helps to list  your business. For experienced users, the building of a simple advertising model takes less than an hour.
                              In the case of positioning the website, the effects are not so fast.
                              They are visible even after a few weeks. 
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6} sx={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                        <Box >
                            <img src={payment} alt="transaction" sx={{width: {xs: "300px", height: {xs: "200px"}}}} />
                        </Box>
                    </Grid>
                </Grid>
            </Box>
            
           
        </Container>
        <Footer />
       </div>
        
    )
}