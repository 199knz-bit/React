import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import '../css/About.css'

function About() {

  const location=useLocation();
  const navigate = useNavigate();
  const fish = location.state.fish

  return (
    <div className="moreFishCard">
            <img className="moreFishImage" src={fish.image} alt={fish.name} />
            <h1 className="moreFishTitle">{fish.name}</h1>
            <p className="moreFishText">{fish.description}</p>
            <button onClick={()=>navigate(-1)}>← Back</button>
    </div>
  )
}

export default About
