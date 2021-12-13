import {logos} from "../../config/constants";

const ModalUser = () => {

    const handleClose = () => {
        document.querySelector('.modal').classList.remove("modal--active");
    }

    return (
        <div className="modal">

            <div className="modal__container">

                <div className="modal__close" onClick={handleClose}>
                    {logos.close}
                </div>

                {logos.user__add}

                <form>

                    <div className="form__input">
                        <label htmlFor="identification">Identification</label>
                        <input type="text" name="identification" id="identification"/>
                    </div>

                    <div className="form__input">
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" id="name"/>
                    </div>

                    <div className="form__input">
                        <label htmlFor="address">Address</label>
                        <input type="text" name="address" id="address"/>
                    </div>

                    <div className="form__input">
                        <label htmlFor="phone">Phone</label>
                        <input type="text" name="phone" id="phone"/>
                    </div>

                    <div className="form__input">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="email"/>
                    </div>

                    <div className="form__input">
                        <label htmlFor="password">Password</label>
                        <input type="text" name="password" id="password"/>
                    </div>

                    <div className="form__input">
                        <label htmlFor="zone">Zone</label>
                        <input type="text" name="zone" id="zone"/>
                    </div>

                    <div className="form__input">
                        <label htmlFor="type" data-label="Select rol">Select rol</label>
                        <select name="type" id="type">
                            <option value="">Select one option</option>
                            <option value="ADM">Administrator</option>
                            <option value="COORD">Coordinator</option>
                            <option value="ASE">Sales Advisor</option>
                        </select>
                    </div>
                    <button id="btnSave" type="button">Save</button>
                </form>
            </div>
        </div>
    )
}

export default ModalUser;