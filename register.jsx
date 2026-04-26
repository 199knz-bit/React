import {useState} from 'react'
import {Link} from "react-router-dom";


export default function Register() {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [confirmedPassword, setConfirmedPassword] = useState()
    const [accounts, addAccount] = useState([
        {email:"199knz@unibit.bg", password: "L12345"}
    ])

    function RegisterAttempt(e){
        e.preventDefault()

        const foundEmail = accounts.find(account => account.email===email)
        if (foundEmail){
            alert("An account with that email already exists!")
            return;
        }

        if (confirmedPassword!=password) { 
            alert("Password doesnt match!")
            setConfirmedPassword("")
            return;
        }

            addAccount(prev => prev.concat({email, password}))
            setEmail("")
            setPassword("")
            setConfirmedPassword("")
    }

    function ListAccounts(){
        const ListItem = accounts.map((account) => 
            {return <ShowAccounts email={account.email} password={account.password} key={account.email}/>}
        )
        return (
            <small>{ListItem}</small>
        )

            function ShowAccounts(props){
                return (
                <p>Password of {props.email} is {props.password}</p>
                )
        }
    }   

    return(
        <>
        <form onSubmit={RegisterAttempt}>
        <fieldset>
        <legend> Create an Account
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email"  />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password"  />
            <input type ="password" value={confirmedPassword} onChange={(e) => setConfirmedPassword(e.target.value)} placeholder="Confirm Password"  />
            <button>Create Account</button>
        </legend>
        </fieldset>
        </form>
        
        <Link to="/login">
        <button>Already have an account?</button>
        </Link>

        <ListAccounts />
        </>
    )
}