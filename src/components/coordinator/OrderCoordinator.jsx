import {useEffect, useState} from "react";
import {Modal} from "react-bootstrap";
import Constants, {icons} from "../../config/constants";
import axios from "axios";
import '../../styles/modal.css';
import sweetAlert from "../../utils/sweetAlert";

const OrderCoordinator = () => {
    const [orders, setOrders] = useState([]);
    const [order, setOrder] = useState(Constants.default_order);
    const [show, setShow] = useState(false);
    const styleInputStatus = {
        width: '70rem',
        textAlign: 'center',
        marginLeft: '12%'
    }

    useEffect(() => {
        getOrder();
    },[show])

    const getOrder = () => {
        const zone = JSON.parse(sessionStorage.getItem("user")).zone;
        axios.get(`${Constants.url_order}/zona/${zone}`)
            .then(result => setOrders(result.data))
            .catch(error => console.log(error));
    }

    const showOrderDetails = async (orderId) => {
        const orderDb = (await axios.get(`${Constants.url_order}/${orderId}`)).data;
        await setOrder(orderDb);
        console.log(order);
        setShow(true);
    }

    const handleInputChange = (e) => {
        setOrder({
            ...order,
            [e.currentTarget.id]: e.currentTarget.value
        });
    }

    const saveStatusOrder = async () => {
        const headers = Constants.headers;
        const response = (await axios.put(`${Constants.url_order}/update`, order, {headers})).data;
        if (response.id === null){
            await sweetAlert.errorAlert("It was not possible to update order");
            return;
        }
        await sweetAlert.successAlert("Order updated successfully");
        setShow(false);
    }

    return (
        <main>
            <section>
                <div className="open" id="btnMenu">
                    <span className="material-icons-sharp">menu</span>
                </div>

                <h1>Order - COORD</h1>

                <div className="content">
                    <div className="table__container">
                        <table className="table">
                            <thead>
                            <tr>
                                <th>Identification</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Date</th>
                                <th>No. Order</th>
                                <th>Status</th>
                                <th>Order Details</th>
                            </tr>
                            </thead>
                            <tbody className="table-content" id="tableContent">
                            {
                                orders.map((order, i) => (
                                    <tr key={i}>
                                        <td data-label="Identification">{order.salesMan.identification}</td>
                                        <td data-label="Name">{order.salesMan.name}</td>
                                        <td data-label="Email">{order.salesMan.email}</td>
                                        <td data-label="Date">{order.registerDay.split("T")[0]}</td>
                                        <td data-label="No. order">{order.id}</td>
                                        <td data-label="Status">{order.status}</td>
                                        <td data-label="Order Details"><span className="warning" onClick={() => showOrderDetails(order.id)}>{icons.details}</span></td>
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
                    <table className="table" style={styleInputStatus}>
                        <thead>
                        <tr>
                            <th>Date</th>
                            <th>No. Order</th>
                            <th>Status</th>
                            <th>Change Status</th>
                            <th>Save</th>
                        </tr>
                        </thead>
                        <tbody className="table-content">
                            <tr>
                                <td data-label="Register day">{order.registerDay}</td>
                                <td data-label="Order id">{order.id}</td>
                                <td data-label="Status">{order.status}</td>
                                <td data-label="Change status">
                                    <select id="status" value={order.status} onChange={handleInputChange} className="form-control">
                                        <option value="Pendiente">Pendiente</option>
                                        <option value="Aprobado">Aprobado</option>
                                        <option value="Rechazado">Rechazado</option>
                                    </select>
                                </td>
                                <td data-label="Save"><span className="warning" onClick={() => saveStatusOrder()}>{icons.save}</span></td>
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
                            <th>Stock</th>
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
                                    <td data-label="Stock">{product.quantity}</td>
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

export default OrderCoordinator;