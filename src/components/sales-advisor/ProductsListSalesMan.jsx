import {useEffect, useState} from "react";
import Constants from "../../config/constants";
import axios from "axios";
import {Button, Col, Form, Row} from "react-bootstrap";
import sweetAlert from "../../utils/sweetAlert";

const ProductsListSalesMan = () => {
    const [products, setProducts] = useState([Constants.default_product]);
    const [filter, setFilter] = useState('');

    useEffect(() => {
        getProducts();
    }, [filter]);

    const getProducts = () => {
        axios.get(`${Constants.url_gadget}/all`)
            .then(result => setProducts(result.data))
            .catch(error => console.log(error));
    }

    const filterDescription = async () => {
        if (filter === '') getProducts();
        if (Number(filter)){
            await sweetAlert.errorAlert("Input must be a just letters");
            return;
        }
        const prodFilter = (await axios.get(`${Constants.url_gadget}/description/${filter}`)).data;
        if (!!prodFilter){
            setProducts(prodFilter);
            return;
        }
        await sweetAlert.errorAlert("Ups! something happen with server");
    }

    const filterPrice = async () => {
        if (filter === '') getProducts();
        if (!Number(filter)){
            await sweetAlert.errorAlert("Input must be a number");
            return;
        }
        const prodFilter = (await axios.get(`${Constants.url_gadget}/price/${filter}`)).data;
        if (!!prodFilter){
            setProducts(prodFilter);
            return;
        }
        await sweetAlert.errorAlert("Ups! something happen with server");
    }

    return (
        <main>
            <section>
                <div className="open" id="btnMenu">
                    <span className="material-icons-sharp">menu</span>
                </div>
                <h1>Admin Products</h1>
                <div className="content">
                    <Form>
                        <Row className="align-items-center mt-3">
                            <Col xs="auto">
                                <Form.Label htmlFor="inlineFormInput">
                                    <h2>Filter - Enter a price or description to search</h2>
                                </Form.Label>
                                <Form.Control
                                    className="mb-2 mt-2"
                                    id="inlineFormInput"
                                    placeholder="Search ..."
                                    onChange={(e) => setFilter(e.currentTarget.value)}
                                />
                                <div className="btn__container">
                                    <Button variant="outline-dark" onClick={() => filterDescription()}>Description</Button>{' '}
                                    <Button variant="outline-primary" onClick={() => filterPrice()}>Price</Button>
                                </div>
                            </Col>
                        </Row>
                    </Form>
                    <div className="table__container">
                        <table className="table">
                            <thead>
                            <tr>
                                <th>Name</th>
                                <th>Category</th>
                                <th>Description</th>
                                <th>Price</th>
                                <th>Photography</th>
                            </tr>
                            </thead>
                            <tbody className="table-content">
                            {
                                products.map((product, i) => (
                                    <tr key={i}>
                                        <td data-label="Name">{product.name}</td>
                                        <td data-label="Category">{product.category}</td>
                                        <td data-label="Description">{product.description}</td>
                                        <td data-label="Price">{product.price}</td>
                                        <td data-label="Photography"><img src={product.photography} alt={product.brand}/></td>
                                    </tr>
                                ))
                            }
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        </main>
    )

}

export default ProductsListSalesMan;