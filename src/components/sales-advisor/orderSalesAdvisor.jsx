import {useEffect, useState} from "react";
import Constants, {icons} from "../../config/constants";
import axios from "axios";
import productOrder from "./Order";
import {Modal} from "react-bootstrap";

const OrderSalesAdvisor =() => {
    const [order, setOrder] = useState(Constants.default_order);
    const [products, setProducts] = useState([]);
    const [quantities, setQuantities] = useState({});
    const [show, setShow] = useState(false);

    document.addEventListener("DOMContentLoaded", async () => {
        axios.get(`${Constants.url_gadget}/all`)
            .then(result => setProducts(result.data))
            .catch(error => console.log(error));
    });

    useEffect(() => {
    }, []);

     const handleInputChangeQuantity = (e) => {
         setQuantities({
             ...quantities,
             [e.currentTarget.id]: e.currentTarget.value
         });
     }

    const handleInputChange = (e) => {
        setOrder({
            ...order,
            [e.currentTarget.id]: e.currentTarget.value
        });
    }

    const filterProducts = () => {
        const prodInOrder = productOrder.getProducts();
        const productsFilter = [];
        products.forEach(product => {
            prodInOrder.forEach(p => {
                if (product.id !== p.id) productsFilter.push(product);
            })
        });
        return productsFilter;
    }

    const loadProducts = () => {
         if (products.length > 0){
             const productsTemp = filterProducts().length > 0 ?
                 filterProducts() :
                 productOrder.getProducts().length !== products.length ? products : []
             setProducts(productsTemp);
         }
         setShow(true);
    }

    const addProduct = (prodId) => {
         productOrder.addProduct(products.filter(p => p.id === prodId)[0]);
    }

    const orderProducts = () => {
         setProducts(productOrder.getProducts);
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
                        <button type="button" onClick={() => loadProducts()}>Add Product</button>
                        <button type="button" id="btnSendOrder">Send Order</button>
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
                            <tbody className="table-content" id="tableContent"/>
                        </table>

                    </div>
                </div>
            </section>
            <Modal className="modal--active" show={show}>
                <Modal.Dialog>
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
                                products.map((product, i) => (
                                    <tr key={i}>
                                        <td data-label="Name">{product.name}</td>
                                        <td data-label="Category">${product.category}</td>
                                        <td data-label="Description">${product.name}</td>
                                        <td data-label="Price">${product.price}</td>
                                        <td data-label="Photography">
                                            <img src={product.photography} alt={product.name}/>
                                        </td>
                                        <td data-label="Quantity">
                                            <input type="number"
                                                   placeholder="0"
                                                   onChange={handleInputChangeQuantity}
                                                   value={productOrder.getQuantity(product.id) || 0}/>
                                        </td>
                                        <td><span onClick={() => addProduct(product.id)}>{icons.add}</span></td>
                                    </tr>
                                ))
                            }
                            </tbody>
                        </table>
                    </Modal.Body>
                    <Modal.Footer>
                        <button className="btn btn-secondary" onClick={() => setShow(false)}>Cancel</button>
                    </Modal.Footer>
                </Modal.Dialog>
            </Modal>
        </main>
    )
}

export default OrderSalesAdvisor;