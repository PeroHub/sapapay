import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
// import Grid from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import success from '../images/success.png'
import copy from '../images/copy.png'

// import { useState } from 'react';
// import {CopyToClipboard} from 'react-copy-to-clipboard';


export default function Signupsuccess () {

    // const [copySuccess, setCopySuccess] = useState(false);
    // const [link, setLink] = useState("i1j3daemrkcnzhhdloowpowpw")
    

// your function to copy here

  // const copyToClipBoard = async copyMe => {
  //   try {
  //     await navigator.clipboard.writeText(copyMe);
  //     setCopySuccess('Copied!');
  //   } catch (err) {
  //     setCopySuccess('Failed to copy!');
  //   }
  // };
    
    return (
        <Container sx={{mt: 8}}>
            <Box sx={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
                <Avatar src={success} />  
                <Typography sx={{fontSize: {xs: "1.5rem", md: "2rem"}, color: "#1C47E0", mt: 2, mb: 2}}>Congratulations On Signing Up</Typography> 
                <Typography >Your business page link is still being reviewed</Typography>
                <Box sx={{border: "1px solid red"}}>
                    <Typography component="span" sx={{mr: 2}}>Refer your friends</Typography>
                    <TextField fullWidth sx={{ p: 2}} style={{paddingRight: "50px", borderRadius: "5px"}} value={'MAN'}/>
                    <Avatar src={copy} sx={{position: "relative", left: {md: "90%", xs: "85%"}, mt: {md: -6, xs: -6}}} />
                </Box>
                
            </Box> 
        </Container>
    )
}