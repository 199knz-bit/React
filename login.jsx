import { useState, useEffect} from "react";
import {createSearchParams, Link, useNavigate } from "react-router-dom";
import { useAuthContext, AuthProvider } from "../contexts/AuthContext";
import '../css/login.css'

export default function Login(){
    const [email, setEmail] =  useState("")
    const [password, setPassword] = useState("")
    const [accounts, setAccounts] = useState([])
    const navigate = useNavigate()
    const { login } = useAuthContext()

    useEffect(() =>{
        const fetchAccounts = async() => {
            const  data= await fetch ('http://localhost:3000/accounts')
            const jsonData = await data.json()
            setAccounts(jsonData)
        }
        fetchAccounts();
     },[])

    function LoginAttempt(e) {
        e.preventDefault()

    const foundAccount = accounts.find(account => account.email===email && account.password===password)
    if (foundAccount){
        login(foundAccount)
        navigate ('/')
    }
    else{
        alert("That account doesnt exist. Check your credentials and try again.")
    }
    }

        function ShowAccounts(props){
        return (
        <small>Password of {props.email} is {props.password}</small>
        )
    }

    function ListAccounts(){
        return (accounts.map(ShowAccounts))
        }
return(
    <>
    <form onSubmit = {LoginAttempt}>
         <h1>Login Page</h1>
            <div>
            <input type="email" value={email} placeholder="Email"
            onChange={(e) => setEmail(e.target.value)} />
            <input type="password" value={password} placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}   />
            <button>Login</button>
        </div>
        <Link to="/register">
            <button>Don't have an account?</button>
        </Link>
    </form>
    <ListAccounts/>

</>
)

}