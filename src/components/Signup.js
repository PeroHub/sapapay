import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import { useState } from 'react';

import sapapay from '../images/sapapay.svg'

export default function Signup() {

    const [sex, setSex] = useState("")

    const handleSex = (event) => {
        setSex(event.target.value)
    }
    return (
        <Container component="main" sx={{height: "85vh"}} maxWidth="sm">
            <Box sx={{border: "1px solid red", p: 2, height: "inherit"}}>
                <Typography sx={{textAlign: "center", background: "#1C47E0", p: 2, fontWeight: "bold", fontSize: "24px", color: "#fff"}}>Sign Up</Typography>
                <Box sx={{display: "flex", alignItems:"center"}} component="form">
                    <Typography>Username</Typography>
                    <TextField 
                     required
                     id='email'
                     name="email"
                     type="text"
                    />
                </Box>
               
                <Box sx={{display: "flex", alignItems:"center"}} component="form">
                    <Typography>Password</Typography>
                    <TextField 
                     required
                     id='password'
                     name="password"
                     type="password"
                    
                    />
                </Box>

                <Box sx={{display: "flex", alignItems:"center"}} component="form">
                    <Typography>Full Name</Typography>
                    <TextField 
                     required
                     id='fullname'
                     name="fullname"
                     type="text"
                     
                    />
                </Box>

                <Box sx={{display: "flex", alignItems:"center"}} component="form">
                    <Typography>Email</Typography>
                    <TextField 
                     required
                     id='email'
                     name="email"
                     type="text"
                    />
                </Box>

                <Box sx={{display: "flex", alignItems:"center"}} component="form">
                    <Typography>Username</Typography>
                    <TextField 
                     required
                     id='email'
                     name="email"
                     
                    />
                </Box>

                <Box sx={{display: "flex", alignItems:"center"}} component="form">
                    <Typography>Sex</Typography>
                    <Select
                        value={sex}
                        label="Age"
                        onChange={handleSex}
                        >
                        <MenuItem value={10}>MALE</MenuItem>
                        <MenuItem value={20}>FEMALE</MenuItem>
                      
                    </Select>
                </Box>

                <Box sx={{display: "flex", alignItems:"center"}} component="form">
                    <Typography>Business/Brand Name</Typography>
                    <TextField 
                     required
                     id='brand'
                     name="brand"
                     type="text"
                    />
                </Box>

                <Box sx={{display: "flex", alignItems:"center"}} component="form">
                    <Typography>Business/Brand Page Link</Typography>
                    <TextField 
                     required
                     id='brandlink'
                     name="brandlink"
                     type="url"
                     
                    />
                </Box>
                <Box sx={{display: "flex", alignItems:"center"}} component="form">
                    <Typography>State/City</Typography>
                    <TextField 
                     required
                     id='state'
                     name="state"
                     type="text"
                     
                    />
                </Box>
                <Box sx={{display: "flex", alignItems:"center"}} component="form">
                    <Typography>Brand Image</Typography>
                    <TextField 
                     required
                     id='image'
                     name="image"
                     type="image"
                     
                    />
                </Box>
                <Button
                type="submit"
                fullWidth
                variant="contained"
                >
                    Continue
                </Button>
            </Box>
        </Container>
    )
}