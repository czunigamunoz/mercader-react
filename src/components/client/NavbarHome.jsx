import {Button, Container, Image, Navbar} from "react-bootstrap";
import logo from "../../assets/images/logo.webp";

const NavbarHome = () => {

    return (
        <Container>
            <Navbar expand="lg">
                <Container fluid>
                    <Navbar.Brand className="d-flex">
                        <Image className="me-1" src={logo} height="40px"/>
                        <span className="fs-3">ercader</span>
                    </Navbar.Brand>
                    {/*<Navbar.Collapse>*/}
                    {/*    <Nav className="me-auto my-2 my-lg-0">*/}
                    {/*        <Nav.Link className="fs-5" href="#action1">Home</Nav.Link>*/}
                    {/*    </Nav>*/}
                    {/*    */}
                    {/*</Navbar.Collapse>*/}
                    <Button className="btn-blue-dark">LOGIN</Button>
                    {/*<Navbar.Toggle />*/}
                </Container>
            </Navbar>
        </Container>
    )
}

export default NavbarHome;