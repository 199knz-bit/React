import {useEffect, useState} from 'react'
import { useFishContext } from '../contexts/FishContext';
import FishCard from './FishCard';
import "../css/RandomFishCard.css"
function RandomFishCard() {

    const fishes=useFishContext()
    if(fishes.length===0){
        return <div>Loading...</div>
    }
    let RemainingFishes = fishes;
    let randomIndex;
    let randomFishes = [];

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

    for (let counter=0; counter<3; counter++){
        randomIndex=getRandomInt(RemainingFishes.length)
        randomFishes.push(RemainingFishes[randomIndex])
        RemainingFishes.splice(randomIndex,1)
    }
     return (
        <div className ="randomFish">
        {randomFishes.map(FishCard)}
        </div>
    )
}

export default RandomFishCard
