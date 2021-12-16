
import './App.css';

import { Link, Outlet } from "react-router-dom"

import Avatar from '@mui/material/Avatar';

import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';

import sapapay from './images/sapapay.svg'



function App() {
  return (
    <div>
       {/* <Countdowntimer /> */}
       <Link to="/" style={{ textDecoration: 'none' }}>
                <Stack direction="row" sx={{justifyContent: 'center', alignItems: "center", position: "relative", right: {xs : '30%', md: "35%"}, mt: 4}} spacing={1}>
                    <Avatar alt="logo" src={sapapay} />
                    <Typography>Sapapay</Typography>
                </Stack>
            </Link>
       <Outlet />
    </div>
     
    
   
    
  );
}

export default App;
