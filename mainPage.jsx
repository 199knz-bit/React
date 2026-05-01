import React, { useState } from 'react'
import {createSearchParams, Link} from "react-router-dom";


import TitleCard from '../components/TitleCard'
import NavigationMenu from '../components/NavigationMenu'
import RenderFishPage from '../components/RenderFishPage'
import IntroParagraphs from '../components/IntroParagraphs'
import './App.css'
function MainPage() {
    const useState=React.useState

return(
<>
<TitleCard/>
<NavigationMenu/>
<IntroParagraphs/>
<RenderFishPage/>
</>
)


}
export default MainPage