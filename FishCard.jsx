import React from 'react'
import {Link} from 'react-router-dom'

import '../css/FishCard.css'
    function FishCard(fish) {
        
    return(
        <Link to ={`/about/${fish.name}`} state={{fish:fish}}>
        <div className="fishCard">
            <img className="fishImage" src={fish.image} alt={fish.name} />
            <h2 className="fishTitle">{fish.name}</h2>
            <p className="fishText">{fish.short_description}</p>
        </div>
        </Link>
    )
}

export default FishCard
