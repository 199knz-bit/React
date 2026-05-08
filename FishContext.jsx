import { createContext, useState, useContext, useEffect } from "react";

const FishContext=createContext()

export function useFishContext() {
    return useContext(FishContext)
}

export function FishProvider({children}){
    const [fishes, setFishes] = useState([])

    useEffect(()=>{
        const fetchFish = async() => {
        const data = await fetch ('http://localhost:3000/fish') 
        const jsonData = await data.json()
        setFishes(jsonData)
        }
        fetchFish();
    }, []);

    const value = fishes

    return <FishContext.Provider value={fishes}>
        {children}
    </FishContext.Provider>
}