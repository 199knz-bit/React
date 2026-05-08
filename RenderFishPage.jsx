import { useFishContext } from '../contexts/FishContext';
import FishCard from './FishCard'; 
import '../css/RenderFishPage.css'
export default function RenderFishPage() {
const fishes=useFishContext()
    if(fishes.length===0){
        return <div>Loading...</div>
    }
    return (
        <div className ="fishList">
        {fishes.map(FishCard)}
        </div>
    )
}


