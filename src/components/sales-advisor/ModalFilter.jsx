import {Modal} from "react-bootstrap";

const ModalFilter = (props) => {
    const {order} = props.order;

    return (
        <Modal show={props.show} className="modal--active" dialogClassName="modal-90w">
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
                        <td data-label="Register day">{order.registerDay.split("T")[0]}</td>
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
                <button className="btn btn-secondary" onClick={props.onClose}>Cancel</button>
            </Modal.Footer>
        </Modal>
    )
}

export default ModalFilter;