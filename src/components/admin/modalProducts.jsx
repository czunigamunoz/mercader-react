import {icons} from "../../config/constants";

const ModalProducts = () => {

    const handleClose = () => {
        document.querySelector('.modal').classList.remove("modal--active");
    }

    return (
        <div className="modal">

            <div className="modal__container">

                <div className="modal__close" onClick={handleClose}>
                    {icons.close}
                </div>

                {icons.add}

                <form>

                    <div className="form__input">
                        <label htmlFor="brand">Brand</label>
                        <input type="text" name="brand" id="brand"/>
                    </div>

                    <div className="form__input">
                        <label htmlFor="category">Category</label>
                        <input type="text" name="category" id="category" value="Gadgets" disabled/>
                    </div>

                    <div className="form__input">
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" id="name"/>
                    </div>

                    <div className="form__input">
                        <label htmlFor="description">Description</label>
                        <input type="text" name="description" id="description"/>
                    </div>

                    <div className="form__input">
                        <label htmlFor="price">Price</label>
                        <input type="number" name="price" id="price"/>
                    </div>

                    <div className="form__input">
                        <label htmlFor="availability">Select availability</label>
                        <select name="availability" id="availability">
                            <option value="">Select one option</option>
                            <option value="true">YES</option>
                            <option value="false">NO</option>
                        </select>
                    </div>

                    <div className="form__input">
                        <label htmlFor="quantity">Quantity</label>
                        <input type="number" name="quantity" id="quantity"/>
                    </div>

                    <div className="form__input">
                        <label htmlFor="photography">Photography</label>
                        <input type="text" name="photography" id="photography"/>
                    </div>

                    <button id="btnSave" type="button">Save</button>

                </form>

            </div>
        </div>
    )
}

export default ModalProducts;