import {Button, Container, Form, Image} from "react-bootstrap";
import earphone from "../../assets/images/audifonos.webp";

const ContactHome = () => {

    return (
        <Container className="d-flex flex-column flex-lg-row mt-5 mb-5 rounded-3 bg-secondary bg-opacity-10">
            <Image className="p-5" src={earphone} alt="audifonos" style={{height: '35rem', width: '35rem'}} fluid/>
            <Container className="p-5">
                <h3 className="fs-1">Need any help?</h3>
                <Form className="mt-4">
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Adam Smith" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="name@example.com" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Example textarea</Form.Label>
                        <Form.Control as="textarea" rows={5} />
                    </Form.Group>
                    <Form.Group className="mb-3" id="formGridCheckbox">
                        <Form.Check type="checkbox" label="I agree Terms & Conditions and Privacy Policy" />
                    </Form.Group>
                    <Button variant="dark" type="submit">
                        Send
                    </Button>
                </Form>
            </Container>
        </Container>
    )
}

export default ContactHome;