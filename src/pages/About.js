import { Col } from "react-bootstrap";

export const About = () => {
    return(
        <Col sm={12} className=" p-2 text-light">
            <h2 className="">About project</h2>
            <p>This is a project to practice the use of fetch using the
                <a href="https://rickandmortyapi.com/" rel="noreferrer" target="_blank"> Rick and Morty API </a>
                also the use of different React JS and CSS libraries:
            </p>
            <ul className="text-left">
                <li>React-Bootstrap</li>
                <li>React--Router-Dom</li>
                <li>Bootstrap</li>
                <li>SASS</li>
            </ul>
        </Col>
    )
}