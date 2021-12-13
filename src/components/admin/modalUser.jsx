const ModalUser = () => {

    return (
        <div className="modal">

            <div className="modal__container">

                <div className="modal__close" id="btnCloseModal">
                    <span className="material-icons-sharp">close</span>
                </div>

                <span className="material-icons-sharp icon_add">person_add_alt</span>

                <form>

                    <div className="form__input">
                        <label htmlFor="identification">Identification</label>
                        <input type="text" name="identification" id="identification"/>
                    </div>

                    <div className="form__input">
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" id="name"/>
                    </div>

                    <div class="form__input">
                        <label htmlFor="address">Address</label>
                        <input type="text" name="address" id="address"/>
                    </div>

                    <div class="form__input">
                        <label htmlFor="phone">Phone</label>
                        <input type="text" name="phone" id="phone"/>
                    </div>

                    <div class="form__input">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="email"/>
                    </div>

                    <div class="form__input">
                        <label htmlFor="password">Password</label>
                        <input type="text" name="password" id="password"/>
                    </div>

                    <div class="form__input">
                        <label htmlFor="zone">Zone</label>
                        <input type="text" name="zone" id="zone"/>
                    </div>

                    <div class="form__input">
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