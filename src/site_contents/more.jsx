import {createSearchParams, Link} from "react-router-dom";
import NavigationMenu from '../components/NavigationMenu';
import RenderFishPage from '../components/RenderFishPage';
import { FishProvider } from '../contexts/FishContext';
import { AuthProvider } from '../contexts/AuthContext';
import TitleCard from "../components/TitleCard";
export default function More(){
    return(
        <>
            <TitleCard title='ALL WEIRD FISH' />
            <NavigationMenu />
            <RenderFishPage/>
        </>
    )
}