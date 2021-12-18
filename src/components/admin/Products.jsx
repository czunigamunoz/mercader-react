import {Modal} from "react-bootstrap";
import {useEffect, useState} from "react";
import Constants, {icons} from "../../config/constants";
import axios from "axios";
import validations from "../../utils/validations";
import sweetAlert from "../../utils/sweetAlert";

const Products = () => {
    const [product, setProduct] = useState(Constants.default_product);
    const [products, setProducts] = useState([]);
    const [show, setShow] = useState(false);

    useEffect(() => {
        getProducts();
    }, [product]);

    const handleInputChange = (e) => {
        setProduct({
            ...product,
            [e.currentTarget.id]: e.currentTarget.value
        });
    }

    const getProducts = () => {
        axios.get(`${Constants.url_gadget}/all`)
            .then(result => setProducts(result.data))
            .catch(error => console.log(error));
    }

    const validationProduct = async () => {
        if (validations.empty(product.brand, product.category, product.name, product.availability, product.photography)){
            await sweetAlert.errorAlert('All fields are required');
            return false;
        }
        if (validations.greaterThan80(product.description)){
            await sweetAlert.errorAlert('Description must not exceed 80 characters');
            return false;
        }
        if (!validations.isNumber(product.price)){
            await sweetAlert.errorAlert('Price must be a number or greater than 0');
            return false;
        }
        if (!validations.isNumber(product.quantity)){
            await sweetAlert.errorAlert('Quantity must be a number or greater than 0');
            return false;
        }
        if (!validations.isLink(product.photography)){
            await sweetAlert.errorAlert('Photography must be a URL');
            return false;
        }
        return true;
    }

    const addProduct = () => {
        setProduct(Constants.default_product);
        setShow(true);
    }

    const saveProduct = async () => {
        const areValid = await validationProduct();
        if (!areValid) return;
        const headers = Constants.headers;
        const response = !!product.id ? await axios.put(`${Constants.url_gadget}/update`, product, {headers}) : await  axios.post(`${Constants.url_gadget}/new`, product, {headers});
        if (response.data?.id === null){
            await sweetAlert.errorAlert('It was not possible to create product');
            return;
        }
        const message = !!product.id ? "Product updated successfully" : "Product created successfully";
        await sweetAlert.successAlert(message);
        setProduct(Constants.default_product);
        setShow(false);
        getProducts();
    }

    const updateProduct = (product) => {
        setProduct(product);
        setShow(true);
    }

    const deleteProduct = async (id) => {
        const isConfirmed = await sweetAlert.confirmAlert();
        if (!isConfirmed) return;
        await axios.delete(`${Constants.url_gadget}/${id}`);
        await sweetAlert.successAlert("Product eliminated successfully");
        getProducts();
    }

    return (
        <main>
            <section>
                <div className="open" id="btnMenu">
                    <span className="material-icons-sharp">menu</span>
                </div>
                <h1>Admin Products</h1>
                <div className="content">
                    <button type="button" onClick={() => addProduct()}>Add Product</button>
                    <div className="table__container">
                        <table className="table">
                            <thead>
                            <tr>
                                <th>Id</th>
                                <th>Brand</th>
                                <th>Category</th>
                                <th>Name</th>
                                <th>Description</th>
                                <th>Price</th>
                                <th>Availability</th>
                                <th>Quantity</th>
                                <th>Photography</th>
                                <th>Edit</th>
                                <th>Delete</th>
                            </tr>
                            </thead>
                            <tbody className="table-content" id="tableContent">
                            {
                                products.map((product, i) => (
                                    <tr key={i}>
                                        <td data-label="Id">{product.id}</td>
                                        <td data-label="Brand">{product.brand}</td>
                                        <td data-label="Category">{product.category}</td>
                                        <td data-label="Name">{product.name}</td>
                                        <td data-label="Description">{product.description}</td>
                                        <td data-label="Price">{product.price}</td>
                                        <td data-label="Availability">{product.availability ? 'SI' : 'NO'}</td>
                                        <td data-label="Quantity">{product.quantity}</td>
                                        <td data-label="Photography"><img src={product.photography} alt={product.brand}/></td>
                                        <td data-label="Edit"><span className="warning" onClick={()=>updateProduct(product)}>{icons.edit}</span></td>
                                        <td data-label="Delete"><span className="danger" onClick={()=>deleteProduct(product.id)}>{icons.delete}</span></td>
                                    </tr>
                                ))
                            }
                            </tbody>
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
                        <div className="row">
                            <div className="col-xs-12 col-lg-6">
                                <label htmlFor="brand">Brand</label>
                                <input type="text" className="form-control" id="brand"
                                       onChange={handleInputChange} value={product.brand} />
                            </div>
                            <div className="col-xs-12 col-lg-6">
                                <label htmlFor="category">Category</label>
                                <input type="text" className="form-control" id="category"
                                       onChange={handleInputChange} value={product.category} disabled/>
                            </div>
                            <div className="col-xs-12 col-lg-6">
                                <label htmlFor="name">Name</label>
                                <input type="text" className="form-control" id="name"
                                       onChange={handleInputChange} value={product.name} />
                            </div>
                            <div className="col-xs-12 col-lg-6">
                                <label htmlFor="description">Description</label>
                                <input type="text" className="form-control" id="description"
                                       onChange={handleInputChange} value={product.description} />
                            </div>
                            <div className="col-xs-12 col-lg-6">
                                <label htmlFor="price">Price</label>
                                <input type="number" className="form-control" id="price"
                                       onChange={handleInputChange} value={product.price} />
                            </div>
                            <div className="col-xs-12 col-lg-6">
                                <label htmlFor="availability">Availability</label>
                                <select id="availability" value={product.availability} onChange={handleInputChange} className="form-control">
                                    <option value="">Select one option</option>
                                    <option value="true">YES</option>
                                    <option value="false">NO</option>
                                </select>
                            </div>
                            <div className="col-xs-12 col-lg-6">
                                <label htmlFor="quantity">quantity</label>
                                <input type="number" className="form-control" id="quantity"
                                       onChange={handleInputChange} value={product.quantity} />
                            </div>
                            <div className="col-xs-12 col-lg-6">
                                <label htmlFor="photography">Photography</label>
                                <input type="text" className="form-control" id="photography"
                                       onChange={handleInputChange} value={product.photography} />
                            </div>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <button className="btn btn-success" onClick={() => saveProduct()}>Save</button>
                        <button className="btn btn-secondary" onClick={() => setShow(false)}>Cancel</button>
                    </Modal.Footer>
                </Modal.Dialog>
            </Modal>
        </main>
    )
}

export default Products;