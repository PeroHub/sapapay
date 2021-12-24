
import './App.css';

import { Link, Outlet } from "react-router-dom"

import Avatar from '@mui/material/Avatar';

import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';

import sapapay from './images/sapapay.svg'
import telegram from './images/telegram.svg'
import whatsapp from './images/whatsapp.svg'

import Footer from './components/Footer';



function App() {
  return (
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
          <MenuIcon sx={{display: {md: "none", sm: "none"}, mt: 5}} />
          <Box sx={{mt: 4, display: {xs: "none", md: "block"}}}>
            <Stack direction="row">
              <Button>Login</Button>
              <Button>Sign Up</Button>
              <Button>About US</Button>
              <Button>Listing Page</Button>
            </Stack>
          </Box>
        </Box>
        

      
       <Outlet />
       <Footer />
    </Box>
     
    
   
    
  );
}

export default App;
