import {Button, Card, Col, Container, Form, FormControl, Row} from "react-bootstrap";
import {useEffect, useState} from "react";
import axios from "axios";
import Constants from "../../config/constants";
import sweetAlert from "../../utils/sweetAlert";

const ProductsHome = () => {
    const [products, setProducts] = useState([Constants.default_product]);
    const [filterClient, setFilterClient] = useState('');

    useEffect(() => {
        getProducts();
    }, [filterClient]);

    const getProducts = () => {
        axios.get(`${Constants.url_gadget}/all`)
            .then(result => setProducts(result.data))
            .catch(error => console.log(error));
    }

    const filterPriceClient = async () => {
        if (filterClient === '') getProducts();
        if (!Number(filterClient)){
            await sweetAlert.errorAlert("Input must be a number");
            return;
        }
        const prodFilter = (await axios.get(`${Constants.url_gadget}/price/${filterClient}`)).data;
        if (!!prodFilter){
            setProducts(prodFilter);
            return;
        }
        await sweetAlert.errorAlert("Ups! something happen with server");
    }

    return (
        <Container className="mt-5">
            <Container className="mb-5">
                <Row lg={2} md={2} sm={12} className="justify-content-center">
                    <Form className="d-flex">
                        <FormControl
                            type="search"
                            placeholder="Search by price  ..."
                            className="me-2"
                            onChange={(e) => setFilterClient(e.currentTarget.value)}
                        />
                        <Button className="btn-blue-dark-outline" onClick={() => filterPriceClient()}>Search</Button>
                    </Form>
                </Row>
            </Container>
            <Row xs={1} md={2} lg={3} className="g-4">
                {Array.from({ length: 6 }).map((_, idx) => (
                // {products.map((product, idx) => (
                    <Col key={idx}>
                        <Card style={{height: '27rem'}}>
                            <Card.Img style={{height: '15rem'}} className="p-5" variant="top" src="https://d598hd2wips7r.cloudfront.net/catalog/product/cache/b3b166914d87ce343d4dc5ec5117b502/3/Y/3Y799LA-1_T1622826153.png"/>
                            <Card.Body>
                                <Card.Title>Portátil Gaming HP 15-ec1037la</Card.Title>
                                <Card.Text style={{overflowY: 'hidden'}}>
                                    Procesador AMD Ryzen™5 4600H
                                    Memoria	8GB DDR4 - 3200
                                    Almacenamiento	512GB SSD PCIe
                                    Tarjeta Gráfica	GeForce GTX 1650Ti 4GB (N18P-G62)
                                    Sistema Operativo	Windows 10 SLEM
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <Container className="d-flex justify-content-between align-items-center p-0">
                                    <span>$ 3.709.300</span>
                                    <Button className="btn-blue-dark">Add to cart</Button>
                                </Container>
                            </Card.Footer>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    )
}

export default ProductsHome;