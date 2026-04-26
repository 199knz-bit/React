import React, { useState } from 'react'
import './App.css'
import Register from './register.jsx'


function MainPage() {
    const useState=React.useState
const pets = [
    {name: "Bobby", species:"cat", age: "5" },
    {name: "Joe", species:"dog", age: "3" },
    {name: "Tony", species:"dog", age: "1" },
    {name: "Meow", species:"cat", age: "2" },
    {name: "Kitty", species:"cat", age: "3" }
]
return(
<>
<h1>PET SHOP!!!</h1>
<h3>Navigation menu here - main page, about</h3>
<div>
    <TimeArea />
<p>Hello! I have to write someting so i can figure out what to do</p>
<p>i have no idea men</p>

</div>
<h3>Pictures of animals?</h3>
<ul>
    {pets.map((pet) => 
    {return <Pet name={pet.name} species={pet.species} age={pet.age} key={pet.name}/>}
)}
</ul>
<Register />


</>
)


function TimeArea() {
    const [theTime, setTheTime] = useState(new Date().toLocaleString())

    setTimeout(() => {
        setTheTime(newDate().toLocaleString())
    }, 1000)

    return <small>The current time is {theTime}.</small>
}
function Pet(props){
    return (
    <p>{props.name} is a {props.species} and is {props.age} years old</p>
    )
}

}
export default MainPage