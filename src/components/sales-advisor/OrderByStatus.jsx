import {useEffect, useState} from "react";
import Constants, {icons} from "../../config/constants";
import axios from "axios";
import {Form, Modal} from "react-bootstrap";

const OrderByStatus = () => {
    const [orders, setOrders] = useState([Constants.default_order]);
    const [order, setOrder] = useState(Constants.default_order);
    const [status, setStatus] = useState('All');
    const [show, setShow] = useState(false);

    useEffect(() => {
        getOrders();
    }, []);

    const getOrders = () => {
        const {id} = JSON.parse(sessionStorage.getItem("user"));
        axios.get(`${Constants.url_order}/salesman/${id}`)
            .then(result => setOrders(result.data))
            .catch(error => console.log(error));
    }

    const loadDetails = async (orderDetail) => {
        setOrder(orderDetail)
        setShow(true);
    }

    const filterByStatus= async () => {
        if (status === 'All'){
            getOrders();
            return;
        }
        const {id} = JSON.parse(sessionStorage.getItem("user"));
        const ordersFilter = await axios.get(`${Constants.url_order}/state/${status}/${id}`);
        if (ordersFilter.data === null) return
        setOrders(ordersFilter.data);
    }

    const clearFilter = () => {
        getOrders();
        setStatus('');
    }

    return (
        <main>
            <section>
                <div className="open" id="btnMenu">
                    <span className="material-icons-sharp">menu</span>
                </div>
                <h1>ASE - Order</h1>
                <div className="content">
                    <div className="content">
                        <button className="button" onClick={() => filterByStatus()}>Filter</button>
                    </div>
                    <div className="btn__container">
                        <div className="col-xs-12 col-lg-3 mt-3">
                            <Form>
                                <Form.Select aria-label="Default select example"
                                             value={status} onChange={(e) => setStatus(e.currentTarget.value)}>
                                    <option value="All">Todos los pedidos</option>
                                    <option value="Pendiente">Pendiente</option>
                                    <option value="Aprobado">Aprobado</option>
                                    <option value="Rechazado">Rechazado</option>
                                </Form.Select>
                            </Form>
                        </div>
                    </div>
                    <div className="table__container">
                        <table className="table">
                            <thead>
                            <tr>
                                <th>Date</th>
                                <th>No. Order</th>
                                <th>Status</th>
                                <th>Order</th>
                            </tr>
                            </thead>
                            <tbody className="table-content" id="tableContent">
                            {
                                orders.map((order, i) => (
                                    <tr key={i}>
                                        <td data-label="Date">{order.registerDay.split("T")[0]}</td>
                                        <td data-label="No. Order">{order.id}</td>
                                        <td data-label="Status">{order.status}</td>
                                        <td data-label="Order"><span className="warning" onClick={() => loadDetails(order)}>{icons.details}</span></td>
                                    </tr>
                                ))
                            }
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
            <Modal className="modal--active" show={show} dialogClassName="modal-90w">
                <Modal.Header>
                    <Modal.Title>Order</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <table className="table">
                        <thead>
                        <tr>
                            <th>Date</th>
                            <th>No. Order</th>
                            <th>Status</th>
                        </tr>
                        </thead>
                        <tbody className="table-content">
                        <tr>
                            <td data-label="Register day">{order.registerDay}</td>
                            <td data-label="Order id">{order.id}</td>
                            <td data-label="Status">{order.status}</td>
                        </tr>
                        </tbody>
                    </table>
                    <table className="table">
                        <thead>
                        <tr>
                            <th>Photography</th>
                            <th>Name</th>
                            <th>Category</th>
                            <th>Description</th>
                            <th>Price</th>
                            <th>Quantity</th>
                        </tr>
                        </thead>
                        <tbody className="table-content" id="tablaProduct">
                        {
                            Object.values(order.products).map((product, i) => (
                                <tr key={i}>
                                    <td data-label="Photography">
                                        <img src={product.photography} alt={product.category}/>
                                    </td>
                                    <td data-label="Name">{product.name}</td>
                                    <td data-label="Category">{product.category}</td>
                                    <td data-label="Description">{product.description}</td>
                                    <td data-label="Price">{product.price}</td>
                                    <td data-label="Quantity">{order.quantities[product.id]}</td>
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

export default OrderByStatus;