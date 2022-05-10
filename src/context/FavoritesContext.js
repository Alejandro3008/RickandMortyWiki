import { createContext,useState,useContext,useEffect } from "react";

const FavoriteContext = createContext();

const initialFavorites =  JSON.parse(localStorage.getItem("RMFavorites")) || [];

const FavoriteProvider = ({children}) => {

    const [favorites,setFavorites] = useState(initialFavorites)

    useEffect(() => {
        localStorage.setItem('RMFavorites', JSON.stringify(favorites))
    },[favorites])


    const data = {favorites,setFavorites};

    return <FavoriteContext.Provider value={data}>{children}</FavoriteContext.Provider>
}

export {FavoriteContext};
export default FavoriteProvider;