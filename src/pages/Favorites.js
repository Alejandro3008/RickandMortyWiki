import React, { useState, useEffect, useContext } from 'react';
import { useFetch } from "../helper/useFerch";
import { Col } from "react-bootstrap";
import { Card } from "../components/Card";
import { Error } from "../components/Error";
import { Loader } from "../components/Loader";
import { FavoriteContext } from '../context/FavoritesContext';

export const Favorites = () => {
    const {favorites,setFavorites} = useContext(FavoriteContext);
    const [url,setUrl] = useState(null);
    const [noFav,setNoFav] = useState(false);
    useEffect(() => {
        if(favorites.length > 0){
            setUrl(`https://rickandmortyapi.com/api/character/${favorites}`);
            setNoFav(true)
        }else{
            setUrl(null)
            setNoFav(false)
        }
    },[favorites]);
    
    const {data,error,loading} = useFetch(url);
    return(
        <>
            <Col sm={12} className="d-flex justify-content-evenly p-2 flex-wrap text-light">
                {loading && <Loader/>}
                {data != null && Array.isArray(data) && data.map(el => (<Card key={el.id} el={el} favorites={favorites} setFavorites={setFavorites}/>))}
                {data != null && Array.isArray(data) === false && <Card key={data.id} el={data} favorites={favorites} setFavorites={setFavorites}/>}
                {data === null && !noFav && <Error image={'./images/rickError.png'} message={"You dont have a favorite characters"} />}
                {error && noFav && <Error image={'./images/rickError.png'} message={"Ohhh sh!t Morty the page can't load the information."} />}
            </Col>
        </>
    )
}