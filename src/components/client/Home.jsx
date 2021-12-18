import {Col, Container, Image, Row, Stack} from "react-bootstrap";
import NavbarHome from "./NavbarHome";
import {icons} from "../../config/constants";
import laptop from "../../assets/images/laptop.webp";
import ProductsHome from "./ProductsHome";

const Home = () => {

    return (
        <Container fluid className="p-0">
            <Container fluid className="bg-blu-dark">
                <Container className="text-light d-flex justify-content-between">
                    <span className="fs-5">{icons.phone} +023-54-23-76</span>
                    <span className="fs-5">{icons.email} nombre@correo.com</span>
                </Container>
            </Container>
            <NavbarHome/>
            <Container className="d-flex flex-column flex-lg-row mt-5">
                <Stack className="d-flex justify-content-center align-items-center">
                    <span className="text-blue text-1__banner">Technology </span>
                    <p className="text-blue text-2__banner">right for you</p>
                </Stack>
                <Image src={laptop} alt="laptop" style={{height: '40rem', width: '40rem'}} fluid rounded/>
            </Container>
            <Container fluid className="mt-5 p-5 bg-light">
                <Container>
                    <Row className="p-3 text-center">
                        <h2 className="fw-bolder fs-1">Our policies</h2>
                    </Row>
                    <Row className="text-center">
                        <Col xs={12} md={6} lg={4}>
                            <span>{icons.shipping}</span>
                            <h3 className="fw-bolder fs-4">Free Shipping</h3>
                            <p className="lh-4">All purchases over $200 one elegible for <br/>
                                free shipping via Servientrega and Coordinadora
                            </p>
                        </Col>
                        <Col xs={12} md={6} lg={4}>
                            <span>{icons.credit_card}</span>
                            <h3 className="fw-bolder fs-4">Easy Payments</h3>
                            <p>All payments are processed instantly <br/>
                                over a secure payment protocol
                            </p>
                        </Col>
                        <Col xs={12} md={6} lg={4}>
                            <span>{icons.thumb_up}</span>
                            <h3 className="fw-bolder fs-4">Money-Back Guarantee</h3>
                            <p>If an item arrived damaged or you've <br/>
                                changed your name, you can send it <br/>
                                back for full refund
                            </p>
                        </Col>
                    </Row>
                </Container>
            </Container>
            <ProductsHome/>
        </Container>
    )
}

export default Home;