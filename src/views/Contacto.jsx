import { Container } from "react-bootstrap";
import Contacto from "../components/Contacto";

const ContactoView = () => {
    return (
        <Container className="pt-5">
            <h1 className="mb-4 text-center">¿En qué te podemos ayudar?</h1>
            <Contacto />
        </Container>
    );
};
export default ContactoView;