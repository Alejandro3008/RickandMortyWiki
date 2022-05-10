import { useState, useContext } from "react";
import { Button, Col } from "react-bootstrap";
import { Card } from "../components/Card";
import { Error } from "../components/Error";
import { BarSearch } from "../components/BarSearch";
import { Loader } from "../components/Loader";
import { useFetch } from "../helper/useFerch";
import { FavoriteContext } from "../context/FavoritesContext";

const urlInitial = 'https://rickandmortyapi.com/api/character';

export const Home = () => {
    const [url,setUrl] = useState(urlInitial)
    const {data,error,loading} = useFetch(url);
    const {favorites,setFavorites} = useContext(FavoriteContext)

    const handleNext = () => {
        if(data.info.next === null){
            return
        }else{
            setUrl(data.info.next)
        }
    }
    const handlePrev = () => {
        if(data.info.prev === null){
            return
        }else{
            setUrl(data.info.prev)
        }
    }
    return(
        <>
            <BarSearch setUrl={setUrl}/>
            <Col sm={12} className="d-flex justify-content-evenly p-2 flex-wrap text-light">
                {loading && <Loader/>}
                {data != null && data.results.map(el => (
                    <Card key={el.id} el={el} favorites={favorites} setFavorites={setFavorites}/>
                ))}
                {error && <Error image={'../images/rickError.png'} message={"Ohhh sh!t Morty the page can't load the information."} />}
                <article className="w-100 mt-3 px-5 d-flex justify-content-end">
                {data && <Button className="me-3 d-flex justify-content-center align-items-center" variant="light" onClick={handlePrev}>
                <svg className="me-1" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left-circle-fill" viewBox="0 0 16 16"><path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"/></svg>
                    Prev
                </Button>}
                {data && <Button className="d-flex justify-content-center align-items-center" variant="light" onClick={handleNext}>
                    <svg className="me-1" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right-circle-fill" viewBox="0 0 16 16"><path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/></svg>
                    Next
                </Button>}
                </article>
            </Col>
        </>
    )
}