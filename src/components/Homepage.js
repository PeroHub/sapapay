import { Link } from "react-router-dom"

export default function Homepage() {
    return (
        <Link to="/count_down">
        <div style={{textAlign: 'center', marginTop: "100px"}}>Go to countdown</div>
        </Link>
        
    )
}