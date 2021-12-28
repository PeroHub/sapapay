import { Link } from "react-router-dom"
import CloseIcon from '@mui/icons-material/Close';
import Container from "@mui/material/Container";
// import Box from "@mui/material/Box";


export default function Listing () {
    return (
        <Container sx={{height: "100vh", border: "1px solid red"}}>
            <Link to="/">
                <CloseIcon sx={{ mt: 3, color: "#FF4500", position: "relative", left: {md: "600px", sm: "400px" , xs: "30 0px"}}} />
            </Link>
            <p>man</p>
        </Container>
    )
}