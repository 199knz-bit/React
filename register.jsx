import {useEffect, useState} from 'react'
import {createSearchParams, Link, useNavigate} from "react-router-dom";
import './login.css'

export default function Register() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmedPassword, setConfirmedPassword] = useState('')
    const [accounts, setAccounts] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        const fetchAccounts = async() => {
            const data = await fetch ('http://localhost:3000/accounts')
            const jsonData = await data.json()
            setAccounts(jsonData)
        }
        fetchAccounts();
    }, []);

    const submitAccount = async() => {

        const result = await fetch ('http://localhost:3000/accounts', { 
         method:"POST",
         headers:{
            "Content-Type": "application/json"
         },
         body: JSON.stringify({email, password})
        }) 
        const resultInJson = await result.json()
        setAccounts(prev=>[...prev, resultInJson])
        navigate ('/')
    }


    function RegisterAccount(e){
        e.preventDefault()
        const emailExists = accounts.find(account => account.email===email)

        if(email || password || confirmedPassword == "")
        {
            alert("Please type your credentials")
            return;
        }

        if (emailExists){
            alert("An account with that email already exists!")
            return;
        }

        if (confirmedPassword!=password) { 
            alert("Password doesnt match!")
            setConfirmedPassword("")
            return;
        }

            submitAccount()
            setEmail("")
            setPassword("")
            setConfirmedPassword("")
    }


    return(
        <>
        <form onSubmit={RegisterAccount}>
            <h1>Create an Account</h1>
            <div>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email"  />
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password"  />
                <input type ="password" value={confirmedPassword} onChange={(e) => setConfirmedPassword(e.target.value)} placeholder="Confirm Password"  />
                <button>Create Account</button>
            </div>
        <Link to="/login">
            <button>Already have an account?</button>
        </Link>
        </form>

        </>
    )
}