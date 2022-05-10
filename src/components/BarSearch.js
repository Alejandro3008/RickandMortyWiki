import { Navbar,Container,Form,Button,FormControl } from "react-bootstrap"

export const BarSearch = ({setUrl}) => {
    let character = '';
    const handleChangeOpntion = (e) => {
        let filter = e.target.value;
        let newURL = `https://rickandmortyapi.com/api/character/${filter}`;
        setUrl(newURL);
    }
    const handleChange = (e) => {
        character = e.target.value
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(character)
        let newURL = `https://rickandmortyapi.com/api/character/?name=${character}`;
        console.log(newURL)
        setUrl(newURL)
        document.getElementById('searchInput').value='';
    }
    return(
        <Navbar bg="light" className="rounded w-100 mx-auto">
            <Container>
                <Form className="d-flex justify-content-evenly w-100" onSubmit={handleSubmit}>
                    <FormControl type="search" id="searchInput" placeholder="Search" name='character' className="me-2 w-50" aria-label="Search" onChange={handleChange}/>
                    <Button type="submit" variant="outline-dark">Search</Button>
                    <div>
                    <Form.Select className="me-auto" aria-label="Default select example" onChange={handleChangeOpntion}>
                        <option value="">All</option>
                        <optgroup label="Status">
                            <option value="?status=alive">Alive</option>
                            <option value="?status=dead">Dead</option>
                            <option value="?status=unknow">Unknow</option>
                        </optgroup>
                        <optgroup label="Gender">
                            <option value="?gender=female">female</option>
                            <option value="?gender=male">Male</option>
                            <option value="?gender=genderless">Genderless</option>
                            <option value="?gender=unknow">Unknow</option>
                        </optgroup>
                    </Form.Select>
                    </div>
                </Form>
            </Container>
        </Navbar>
    )
}