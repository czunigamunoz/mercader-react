import {useEffect, useState} from "react";
import Constants, {icons} from "../../config/constants";
import axios from "axios";
import {Button, Modal} from "react-bootstrap";
import sweetAlert from "../../utils/sweetAlert";

const OrderSalesAdvisor =() => {
    const [productsOrder, setProductsOrder] = useState([]);
    const [productsDB, setProductsDB] = useState([]);
    const [quantities, setQuantities] = useState([]);
    const [show, setShow] = useState(false);

    useEffect(() => {
    }, []);

    const loadProducts = () => {
        axios.get(`${Constants.url_gadget}/all`)
            .then(result => setProductsDB(result.data))
            .catch(error => console.log(error))
    }

    const showProducts = () => {
        loadProducts();
        setShow(true);
    }

    const handleInputChange = (e) => {
        setQuantities({
            ...quantities,
            [e.currentTarget.id]: e.currentTarget.value
        });
        console.log(quantities);
    }

    /**
     * Todo: Filter product already in productOrder
     * Todo: Change for
     * @param prod
     */
    const addProduct = (prod) => {
        productsOrder.push(prod);
        setProductsDB(productsDB);
        setShow(false);
    }

    const deleteProduct = (id) => {
        setProductsOrder(productsOrder.filter(p => p.id !== id));
    }

    const getCurrentDate = () => {
        const offset = new Date().getTimezoneOffset();
        const date = new Date(new Date().getTime() - offset * 60 * 1000);
        return date.toISOString().split("T")[0];
    }

    const sendOrder = async () => {
        if (productsOrder.length === 0){
            await sweetAlert.errorAlert('You must add at least one product');
            return;
        }
        if (Object.keys(quantities).length === 0 || Object.keys(quantities).length !== productsOrder.length){
            await sweetAlert.errorAlert("You must add quantity in the corresponding field");
            return;
        }
        const salesMan = JSON.parse(sessionStorage.getItem("user"));
        const productsToSend = {}
        for (let i = 0; i<productsOrder.length; i++){
            productsToSend[productsOrder[i].id] = productsOrder[i]
        }
        const data = {
            registerDay: getCurrentDate(),
            status: "Pendiente",
            salesMan,
            products: productsToSend,
            quantities: {...quantities}
        };
        const headers = Constants.headers;
        const order = await axios.post(`${Constants.url_order}/new`, JSON.stringify(data), {headers});
        if (order?.id === null){
            await sweetAlert.errorAlert("It was not possible to create order");
            return;
        }
        await sweetAlert.successAlert(`Order ${order.id} added successfully`);
        setProductsOrder([]);
        setQuantities([]);
    }

    return (
        <main>
            <section>
                <div className="open" id="btnMenu">
                    <span className="material-icons-sharp">menu</span>
                </div>
                <h1>Order - ASE</h1>
                <div className="content">
                    <div className="btn__container">
                        <Button type="button" onClick={() => showProducts()}>Add Product</Button>
                        <Button className="btn-danger" type="button" onClick={() => sendOrder()}>Send Order</Button>
                    </div>
                    <div className="table__container">
                        <table className="table">
                            <thead>
                            <tr>
                                <th>Name</th>
                                <th>Category</th>
                                <th>Description</th>
                                <th>Price</th>
                                <th>Photography</th>
                                <th>Quantity</th>
                                <th>Delete</th>
                            </tr>
                            </thead>
                            <tbody className="table-content" id="tableContent">
                            {
                                productsOrder.map((product, i) => (
                                    <tr key={i}>
                                        <td data-label="name">{product.name}</td>
                                        <td data-label="Category">{product.category}</td>
                                        <td data-label="Description">{product.description}</td>
                                        <td data-label="Price">{product.price}</td>
                                        <td data-label="Photography">
                                            <img src={product.photography} alt={product.category}/>
                                        </td>
                                        <td data-label="Quantity">
                                            <input id={product.id}
                                                   type="number"
                                                   placeholder="0"
                                                   onChange={handleInputChange}
                                            />
                                        </td>
                                        <td data-label="Add"><span className="warning" onClick={() => deleteProduct(product.id)}>{icons.delete}</span>
                                        </td>
                                    </tr>
                                ))
                            }
                            </tbody>
                        </table>

                    </div>
                </div>
            </section>
            <Modal className="modal--active" show={show}>
                    <Modal.Header>
                        <Modal.Title>Product</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <table className="table">
                            <thead>
                            <tr>
                                <th>Brand</th>
                                <th>Category</th>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Add</th>
                            </tr>
                            </thead>

                            <tbody className="table-content" id="tablaProduct">
                            {
                                productsDB.map((product, i) => (
                                    <tr key={i}>
                                        <td data-label="Brand">{product.brand}</td>
                                        <td data-label="Category">{product.category}</td>
                                        <td data-label="Name">{product.name}</td>
                                        <td data-label="Price">{product.price}</td>
                                        <td data-label="Add"><span className="warning" onClick={() => addProduct(product)}>{icons.add}</span></td>
                                    </tr>
                                ))
                            }
                            </tbody>
                        </table>
                    </Modal.Body>
                    <Modal.Footer>
                        <button className="btn btn-secondary" onClick={() => setShow(false)}>Cancel</button>
                    </Modal.Footer>
            </Modal>
        </main>
    )
}

export default OrderSalesAdvisor;