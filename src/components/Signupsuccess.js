import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
// import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import success from '../images/success.png'
import copy from '../images/copy.png'
import telegram from '../images/telegram.svg'
import whatsapp from '../images/whatsapp.svg'
import { useState } from 'react';
import {CopyToClipboard} from 'react-copy-to-clipboard';


export default function Signupsuccess () {

    const [copySuccess, setCopySuccess] = useState(false);
    const [link, setLink] = useState("https://gfygefhgfgyfgajhfvfg")

    console.log("this is" + link)
    let handleLink = (event) => {
        setLink(event.target.value)
    }
    

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
                <Typography sx={{fontWeight: "500", fontSize: "1.2rem"}}>Your business page link is still being reviewed</Typography>
                <Box sx={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                <Grid container >
                    <Grid item>
                    <Box sx={{display: "flex", flexDirection: {xs: "column", md: "row"}, justifyContent: "center", alignItems: "center", p: 2}}>
                    <Typography  sx={{color: "#9ca3af"}}>Refer your friends</Typography>
                    <TextField 
                         sx={{ p: 2}} 
                        style={{borderRadius: "5px"}} 
                        value={link} 
                        onChange={handleLink} />
                    {/* <Avatar src={copy} sx={{position: "relative", left: {md: "90%", xs: "85%"}, mt: {md: -6, xs: -6}}} /> */}
                    
                </Box>
                    </Grid>
                    <Grid item>
                    <Box sx={{display: "flex", justifyContent: "center", alignItems: "center", height: "120px", width: {xs: "850%", sm: "0%", md: "0%"}}}>
                        <CopyToClipboard text={link}
                            onCopy={() => setCopySuccess(true)}>
                            <Avatar src={copy} />
                            
                        </CopyToClipboard>
                    </Box>
                    </Grid>
                </Grid>
                </Box>

                <Stack direction="row" spacing={2}>
                    <Avatar src={telegram} alt="telegram" />
                    <Avatar src={whatsapp} alt="whatsapp"/>
                </Stack>

                <Button variant="contained" sx={{mt: 2}}>View Listing</Button>
                
                

                
        {copySuccess ? <span style={{color: 'red'}}>Copied</span> : null}
            </Box> 
        </Container>
    )
}