import Container from '@mui/material/Container';
// import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
// import Stack from '@mui/material/Stack';
// import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
// import Grid from '@mui/material/Grid';
import FormControl from '@mui/material/FormControl';
import { useState } from 'react';
import { Link } from "react-router-dom"
// import CircularProgress from '@mui/material/CircularProgress';


// import sapapay from '../images/sapapay.svg'
// import Vector from '../images/Vector.png'



export default function Signup() {

    const [sex, setSex] = useState("")

    const handleSex = (event) => {
        setSex(event.target.value)
    }

    // const  [value, setValue] = useState(null)

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        // eslint-disable-next-line no-console
        // setValue(data)
        console.log({
          email: data.get('email'),
          password: data.get('password'),
        });
      };

    return (
            <Container component="main" sx={{minHeight: "85vh", mt: 4}} maxWidth="sm">
            <Box sx={{border: "1px solid #d3d3d3", p: 2, height: "inherit"}}>
                <Typography sx={{textAlign: "center", background: "#FF4500", p: 2, fontWeight: "bold", fontSize: "24px", color: "#fff"}}>Sign Up</Typography>
                
                <Box  component="form" onSubmit={handleSubmit}>
                    <Box sx={{display: "flex", alignItems:"center"}}>
                        <FormControl sx={{m: 1, width: "100%"}}>
                            <Typography sx={{ width: "50%"}}>Username</Typography>
                            <TextField 
                            sx={{width: '100%'}}
                            required
                            id='username'
                            name="username"
                            type="text"
                            />
                        </FormControl>
                    </Box>

                    <Box sx={{display: "flex", alignItems:"center"}}>
                        <FormControl sx={{m: 1, width: "100%"}}>
                            <Typography sx={{ width: "50%"}}>Full Name</Typography>
                            <TextField 
                            sx={{width: '100%'}}
                            required
                            id='fullname'
                            name="fullname"
                            type="text"
                            />
                        </FormControl>
                    </Box>

                    <Box sx={{display: "flex", alignItems:"center"}}>
                        <FormControl sx={{m: 1, width: "100%"}}>
                            <Typography sx={{ width: "50%"}}>Password</Typography>
                            <TextField 
                            sx={{width: '100%'}}
                            required
                            id='password'
                            name="password"
                            type="password"
                            autoComplete="current-password"
                            />
                        </FormControl>
                    </Box>



                    {/* <Box sx={{display: "flex", alignItems:"center"}}>
                        <FormControl sx={{m: 1, width: "100%"}}>
                            <Typography sx={{ width: "50%"}}>Username</Typography>
                            <TextField 
                            sx={{width: '100%'}}
                            required
                            id='email'
                            name="email"
                            type="text"
                            />
                        </FormControl>
                    </Box> */}

                    <Box sx={{display: "flex", alignItems:"center"}}>
                        <FormControl sx={{m: 1, width: "100%"}}>
                            <Typography sx={{ width: "50%"}}>Email</Typography>
                            <TextField 
                            sx={{width: '100%'}}
                            required
                            id='email'
                            name="email"
                            type="email"
                            autoComplete="email"
                            autoFocus
                            />
                        </FormControl>
                    </Box>

                    <Box sx={{display: "flex", alignItems:"center"}} component="form">
                        <FormControl sx={{m: 1, width: "100%"}}>
                        <Typography>Sex</Typography>
                            <Select
                            sx={{width: '50%'}}
                            value={sex}
                            onChange={handleSex}
                            >
                            <MenuItem value={10}>MALE</MenuItem>
                            <MenuItem value={20}>FEMALE</MenuItem>
                        
                            </Select>

                        </FormControl>
                    
                    </Box>


                    <Box sx={{display: "flex", alignItems:"center"}}>
                        <FormControl sx={{m: 1, width: "100%"}}>
                            <Typography sx={{ width: "50%"}}>Business/Brand Name</Typography>
                            <TextField 
                            sx={{width: '100%'}}
                            required
                            id='brand'
                            name="brand"
                            type="text"
                            />
                        </FormControl>
                    </Box>


                    <Box sx={{display: "flex", alignItems:"center"}}>
                        <FormControl sx={{m: 1, width: "100%"}}>
                            <Typography sx={{width: "50%"}}>Business Phone Number</Typography>
                            <TextField 
                            sx={{width: '100%'}}
                            id='number'
                            name="number"
                            type="number"
                            />
                        </FormControl>
                    </Box>

                    {/* <Box sx={{display: "flex", alignItems:"center"}}>
                        <FormControl sx={{m: 1, width: "100%"}}>
                            <Typography sx={{ width: "50%"}}>Business Image(optional)</Typography>
                            <TextField 
                            sx={{width: '100%'}}
                            id='image'
                            name="image"
                            type="image"
                            />
                        </FormControl>
                    </Box> */}
              
                    <Link to="/success" style={{textDecoration: "none"}}>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{background: "#FF4500", color: "#fff", mt: 2}}
                        
                        >
                            Continue
                    </Button>
                    </Link>
                    
                    


                    
                   
                </Box>
 
            </Box>
        </Container>
        
    )
}