import './App.css'
import {createSearchParams, Link} from "react-router-dom";
import NavigationMenu from '../components/NavigationMenu';


export default function About(){
    return(
        <>
        <h1>About</h1>
        <NavigationMenu />
        <p>These things are weird man</p>
        </>
    )
}