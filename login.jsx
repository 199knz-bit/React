import { Link } from "react-router-dom";


export default function Login(){
    
return(
    <>
    <h1>Login Page</h1>
    <Link to="/register">
    <button>Don't have an account?</button>
    </Link>
</>
)

}