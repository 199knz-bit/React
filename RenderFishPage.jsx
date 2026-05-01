import {useEffect, useState} from 'react'
function RenderFishPage() {
    const [fishes, setFishes] = useState([])
    
    useEffect(() =>{
        const fetchFish = async() => {
        const data = await fetch ('http://localhost:3000/fish') 
        const jsonData = await data.json()
        setFishes(jsonData)
        }
        fetchFish();
    }, []);

     function FishList(fish) {
        return(
            <div className="fishCard">
                    <img className="fishImage" src={fish.image} alt={fish.name} />
                    <h2 className="fishTitle">{fish.id}.{fish.name}</h2>
                    <p className="fishText">{fish.description}</p>
            </div>

        )
    }
    return (
        <div className ="fishList">
        {fishes.map(FishList)}
        </div>
    )
 }

export default RenderFishPage
