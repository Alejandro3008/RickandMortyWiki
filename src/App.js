import { Routes, Route, HashRouter} from 'react-router-dom';
import { Container, Row } from "react-bootstrap";
import { Menu } from "./components/Menu";
import { Home } from "./pages/Home";
import { HeroTitle } from "./components/HeroTitle";
import { Favorites } from './pages/Favorites';
import { Error } from './components/Error';
import { About } from './pages/About';
import FavoriteProvider from './context/FavoritesContext';

function App() {
  return (
    <>
    <div className="bg-dark">
    <HashRouter>
        <Menu/>
        <Container>
          <Row>
            <FavoriteProvider>
            <HeroTitle/>
              <Routes>
                <Route  exact path='/' element={<Home/>}/>
                <Route  exact path='/favorites' element={<Favorites/>}/>
                <Route  exact path='/about' element={<About/>}/>
                <Route path='*' element={<Error image={'./images/notFound.png'} message={"Ohhh sh!t Morty page not found"} />}/>
              </Routes>
              </FavoriteProvider>
          </Row>
        </Container>
    </HashRouter>
    </div>
    </>
  );
}

export default App;
