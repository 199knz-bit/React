import React, { useState } from 'react'
import {createSearchParams, Link} from "react-router-dom";

import { FishProvider } from '../contexts/FishContext';
import { AuthProvider } from '../contexts/AuthContext';
import TitleCard from '../components/TitleCard'
import NavigationMenu from '../components/NavigationMenu'
import IntroParagraphs from '../components/IntroParagraphs'
import RandomFishCard from '../components/RandomFishCard';
function MainPage() {
    const useState=React.useState
    function getRandomInt(max) {
    const randomNumber = Math.floor(Math.random() * max);
        console.log(randomNumber)
  return randomNumber
    }
return(
<>
        <TitleCard title="WEIRD DEEP SEA CREATURES"/>
        <NavigationMenu/>
        <RandomFishCard/>
        <hr />
        <IntroParagraphs/>
</>
)


}
export default MainPage