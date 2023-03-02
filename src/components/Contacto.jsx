import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Contacto() {
    return (
        <Form>
            <Form.Group className="mb-3 text-center" controlId="correo" >
                <Form.Label>Correo</Form.Label>
                <Form.Control type="email" placeholder="Ingresa tu correo" />
            </Form.Group>

            <Form.Group className="mb-3 text-center" controlId="descrip">
                <Form.Label>Descripción</Form.Label>
                <Form.Control type="text" placeholder="Escribe una breve descripción de tu consulta" />
            </Form.Group>
            <div className="text-center">
                <Button variant="primary" type="submit" >
                    Enviar
                </Button>
            </div>

        </Form>
    );
}

export default Contacto;