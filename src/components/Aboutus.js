import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import CloseIcon from '@mui/icons-material/Close';
import Link from '@mui/material/Link';
import { Typography } from '@mui/material';


function Copyright(props) {
    return (
      <Typography variant="body2" color="text.secondary" align="center" {...props}>
        {'Copyright © '}
        <Link color="inherit" href="/">
          sapapays.com
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }

export default function Aboutus () {
    return (
        <Container>
             <Link href="/">
                <CloseIcon sx={{ mt: 3, color: "#FF4500", position: "relative", left: {md: "1000px", sm: "500px" , xs: "250px"}}} />
            </Link>
           <Box>
             
            <h1 style={{textAlign: "center", marginBottom: "-10px", color: "rgb(148, 143, 143)", paddingBottom: "20px"}}>About Us</h1>
            <Box sx={{border: "1px solid #FF4500", width: "15%", m : "0 auto"}}></Box>
            <Typography sx={{color: "rgb(148, 143, 143)", mt: 10}}>
                Sapapay is a community of entrepreneurs empowering each other to enhance growth in capital, increase online 
                visibility of entrepreneurs goods and services by promoting each other’s brand, businesses and sharing valued information on business trends.
            </Typography>
           </Box>
           <Copyright sx={{ mt: 8, mb: 4 }} />
        </Container>
    )
}