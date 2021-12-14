import {icons} from "../../config/constants";

const ModalOrderSales = () => {

    const handleClose = () => {
        document.querySelector('.modal').classList.remove("modal--active");
    }

    return (
        <div className="modal">
            <div className="modal__container">
                <div className="modal__close" onClick={handleClose}>
                    {icons.close}
                </div>

                {icons.add_shopping}

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
                    <tbody className="table-content" id="tablaProduct"/>
                </table>
            </div>
        </div>
    )
}

export default ModalOrderSales;