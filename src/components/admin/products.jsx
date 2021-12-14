import ModalProducts from "./modalProducts";

const Products = () => {

    const handleModal = () => {
        document.querySelector('.modal').classList.add("modal--active");
    }

    return (
        <main>

            <section>

                <div className="open" id="btnMenu">
                    <span className="material-icons-sharp">menu</span>
                </div>

                <h1>Admin Products</h1>

                <div className="content">

                    <button type="button" onClick={handleModal}>Add Product</button>

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

                            </tbody>

                        </table>

                    </div>


                </div>

            </section>
            <ModalProducts/>
        </main>
    )
}

export default Products;