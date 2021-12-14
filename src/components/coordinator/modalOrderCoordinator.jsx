import {icons} from "../../config/constants";

const ModalOrderCoordinator = () => {

    const handleClose = () => {
        document.querySelector('.modal').classList.remove("modal--active");
    }

    return (
        <div className="modal">

            <div className="modal__container modal__coord-order">

                <div className="modal__close" onClick={handleClose}>
                    {icons.close}
                </div>

                <span className="material-icons-sharp icon_add">inventory</span>

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

                    <tbody className="table-content" id="tableTop"/>
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

                    <tbody className="table-content" id="tableBottom"/>
                </table>

            </div>

        </div>
    )
}

export default ModalOrderCoordinator;