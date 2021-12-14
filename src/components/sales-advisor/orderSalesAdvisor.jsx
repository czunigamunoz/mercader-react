import ModalOrderSales from "./modalOrderSales";

const OrderSalesAdvisor =() => {

    const handleModal = () => {
        document.querySelector('.modal').classList.add("modal--active");
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

                        <button type="button" onClick={handleModal}>Add Product</button>

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
            <ModalOrderSales/>
        </main>
    )
}

export default OrderSalesAdvisor;