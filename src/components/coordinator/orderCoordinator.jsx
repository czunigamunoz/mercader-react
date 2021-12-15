import {useState} from "react";
import {Modal} from "react-bootstrap";
import Constants, {icons} from "../../config/constants";
import axios from "axios";

const OrderCoordinator = () => {
    const [order, setOrder] = useState([]);
    const [show, setShow] = useState(false);

    const getOrder = async () => {
        axios.get(`${Constants.url_order}/all`)
            .then(result => setOrder(result.data))
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
                            <th>Date</th>
                            <th>No. Order</th>
                            <th>Status</th>
                            <th>Change Status</th>
                            <th>Save</th>
                        </tr>
                        </thead>

                        <tbody className="table-content" id="tablaProduct">
                        {
                            // productsDB.map((product, i) => (
                            //     <tr key={i}>
                            //         <td data-label="Brand">{product.brand}</td>
                            //         <td data-label="Category">{product.category}</td>
                            //         <td data-label="Name">{product.name}</td>
                            //         <td data-label="Price">{product.price}</td>
                            //         <td data-label="Add"><span className="warning" onClick={() => addProduct(product)}>{icons.add}</span></td>
                            //     </tr>
                            // ))
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