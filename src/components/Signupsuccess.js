import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import success from '../images/success.png'


export default function Signupsuccess () {
    return (
        <Container sx={{}}>
            <Box sx={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
                <Avatar src={success} />  
                <Typography sx={{fontSize: "2rem", color: "#1C47E0"}}>Congratulations On Signing Up</Typography> 
            </Box> 
        </Container>
    )
}