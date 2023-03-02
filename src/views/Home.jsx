import { Container } from "react-bootstrap";
import fotopastel from '../assets/img/cakethumb.jpg'
import Image from 'react-bootstrap/Image'
const Home = () => {
    return (
        <Container className="text-center">
            <h1 className="pt-5">
                Bienvenido a <span className="fw-bold">Pastel Feliz</span> 
            </h1>
            <h6> La mejor pastelería del barrio </h6>
            <div> 
                <Image src={fotopastel} thumbnail fluid roundedCircle>
                    
                </Image>                               
            </div>
        </Container>
    );
};
export default Home;