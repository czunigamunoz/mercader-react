const OrderCoordinator = () => {

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
        </main>
    )
}

export default OrderCoordinator;