import { Spinner } from "react-bootstrap";
export const Loader = () => {
    return(
        <Spinner animation="border" role="status" variant="light">
            <span className="visually-hidden">Loading...</span>
        </Spinner>
    )
}