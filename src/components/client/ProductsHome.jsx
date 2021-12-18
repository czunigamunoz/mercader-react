import {Button, Card, Col, Container, Form, FormControl, Row} from "react-bootstrap";
import laptop from "../../assets/images/laptop.webp";

const ProductsHome = () => {

    return (
        <Container className="mt-5">
            <Container className="mb-5">
                <Row lg={2} md={2} sm={12} className="justify-content-center">
                    <Form className="d-flex">
                        <FormControl
                            type="search"
                            placeholder="Search by category ..."
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button className="btn-blue-dark-outline">Search</Button>
                    </Form>
                </Row>
            </Container>
            <Row xs={1} md={2} lg={3} className="g-4">
                {Array.from({ length: 7 }).map((_, idx) => (
                    <Col>
                        <Card>
                            <Card.Img variant="top" src={laptop}/>
                            <Card.Body>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                    This is a longer card with supporting text below as a natural
                                    lead-in to additional content. This content is a little bit longer.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    )
}

export default ProductsHome;