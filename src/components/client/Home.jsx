import {Container, Navbar, Nav, Form, FormControl, Button, Stack, Image, Row, Col} from "react-bootstrap";
import logo from '../../assets/images/logo.webp';

const Home = () => {

    return (
        <Container fluid>
            <Container>
                <Navbar expand="lg">
                    <Container fluid>
                        <Navbar.Brand className="d-flex">
                            <Image className="me-1" src={logo} height="40px"/>
                            <span className="fs-3">ercader</span>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                        <Navbar.Collapse>
                            <Nav className="me-auto my-2 my-lg-0">
                                <Nav.Link className="fs-5" href="#action1">Home</Nav.Link>
                                <Form className="d-flex ms-lg-3 ms-xl-3">
                                    <FormControl
                                        type="search"
                                        placeholder="Search"
                                        className="me-2"
                                        aria-label="Search"
                                    />
                                    <Button className="btn-blue-dark-outline">Search</Button>
                                </Form>
                            </Nav>
                            <Button className="btn-blue-dark">LOGIN</Button>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </Container>
        </Container>
    )
}

export default Home;