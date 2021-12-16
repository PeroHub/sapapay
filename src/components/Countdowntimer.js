import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import { Link } from "react-router-dom"
import CircularProgress from '@mui/material/CircularProgress';
import { useState, useEffect } from 'react';

import sapapay from '../images/sapapay.svg'
import Countdown from './Countdown'
import Change from './Change';


export default function Countdowntimer() {

    
   
    let future = Date.parse("January 30, 2022 01:30:00")

    const [time, setTime] = useState([])
    console.log("this is" + time)
    

    useEffect(() => {
        setInterval(() => {
            let now = new Date()
            let diff = future - now

            let days = Math.floor(diff / (1000 * 60 * 60 * 24));
            let hours = Math.floor(diff / (1000 * 60 * 60));
            let mins = Math.floor(diff / (1000 * 60));
            let secs = Math.floor(diff / 1000);

            let d = days;
            let h = hours - days * 24;
            let m = mins - hours * 60;
            let s = secs - mins * 60;

            let arrayTime = [d, h, m, s]
            setTime(arrayTime)

            
        }, 1000)
    }, [])
    
    


        

    let firstBox = {
        background: "#1C47E0",
        color: "#FFF"
    }

    let secondBox = {
        background: "#000",
        color: "#fff"
    }
    return (
        <Container component="main" sx={{ height: "100vh"}}>
            
            {time.length < 1 ? <Box sx={{display: 'flex', alignItems: "center", justifyContent: "center", mt: 8}}><CircularProgress /></Box> : <Box>
                <Typography sx={{textAlign: 'center', color: "#BEBEBE", fontWeight: "bold",mt:4}}>COUNTDOWN DAYS TO LAUNCHING</Typography>
                <Grid container rowSpacing={1} align="center">
                    <Grid item xs={6} md={3}>
                        <Countdown {...firstBox} Day={`${time[0]} days`} />
                    </Grid>
                    <Grid item xs={6} md={3}>
                        <Countdown {...secondBox} Day={`${time[1]} Hours`} />
                    </Grid>
                    <Grid item xs={6} md={3}>
                        <Countdown {...secondBox} Day={`${time[2]} minutes`}/>
                    </Grid>
                    <Grid item xs={6} md={3}>
                        <Countdown {...secondBox} Day={`${time[3]} seconds`} />
                    </Grid>
                </Grid>
            </Box>}
            
            
            <Change />
  
    
        </Container>
    )
}