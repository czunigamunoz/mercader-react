import {useEffect, useState} from "react";
import axios from "axios";
import Constants, {icons} from "../../config/constants";
import sweetAlert from "../../utils/SweetAlert";
import {Modal} from "react-bootstrap";
import validations from "../../utils/validations";

const Users = () => {
    const [user, setUser] = useState(Constants.default_user);
    const [users, setUsers] = useState([]);
    const [show, setShow] = useState(false);

    useEffect(() => {
        getUsers();
    }, []);

    const handleInputChange = (e) => {
        setUser({
            ...user,
            [e.currentTarget.id]: e.currentTarget.value
        });
    }

    const getUsers = () => {
        axios.get(`${Constants.url_user}/all`)
            .then( result => setUsers(result.data))
            .catch(error => console.log(error));
    }

    const validationsUser = async () => {
        if (validations.empty(user.identification, user.name, user.address, user.cellPhone, user.email, user.password, user.zone, user.type)){
            await sweetAlert.errorAlert('All fields are required');
            return false;
        }
        if (validations.email(user.email)) {
            await sweetAlert.errorAlert('Please enter a valid email address');
            return false;
        }
        if (validations.greaterThan80(user.name)){
            await sweetAlert.errorAlert('Name must not exceed 80 characters');
            return false;
        }
        if (validations.greaterThan50(user.email)){
            await sweetAlert.errorAlert('Email must not exceed 50 characters');
            return false;
        }
        if (validations.greaterThan50(user.password)){
            await sweetAlert.errorAlert('Password must not exceed 50 characters');
            return false;
        }
        const isEmail = await axios.get(`${Constants.url_user}/emailexist/${user.email}`);
        if (!!user.id){
            const userTemp = await axios.get(`${Constants.url_user}/${user.id}`);
            if (userTemp.data?.email === user.email) return true
        }
        if (isEmail.data){
            await sweetAlert.errorAlert('Email already exists');
            return false;
        }
        return true;
    }

    const addUser = () => {
        setUser(Constants.default_user);
        setShow(true);
    }

    const saveUser = async () => {
        const areValid = await validationsUser();
        if (!areValid) return;
        const headers = Constants.headers;
        const response = !!user.id ? await axios.put(`${Constants.url_user}/update`, user, {headers}) : await  axios.post(`${Constants.url_user}/new`, user, {headers});
        if (response.data?.id === null){
            await sweetAlert.errorAlert('It was not possible to create user');
            return;
        }
        const message = !!user.id ? "User updated successfully" : "User created successfully";
        await sweetAlert.successAlert(message);
        setShow(false);
        getUsers();
    }

    const updateUser = (user) => {
        setUser(user);
        setShow(true);
    }

    const deleteUser = async (id) => {
        const isConfirmed = await sweetAlert.confirmAlert();
        if (!isConfirmed) return;
        await axios.delete(`${Constants.url_user}/${id}`);
        await sweetAlert.successAlert("User eliminated successfully");
        getUsers();
    }

    return (
        <main>
            <section>
                <div className="open" id="btnMenu">
                    <span className="material-icons-sharp">menu</span>
                </div>
                <h1>Admin Users</h1>
                <div className="content">
                    <button type="button" onClick={() => addUser()}>Add User</button>
                    <div className="table__container">
                        <table className="table">
                            <thead>
                            <tr>
                                <th className="text-white">Identification</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Role</th>
                                <th>Zone</th>
                                <th>Edit</th>
                                <th>Delete</th>
                            </tr>
                            </thead>
                            <tbody className="table-content" id="tableContent">
                            {
                                users.map((user, i) => (
                                    <tr key={i}>
                                        <td data-label="Identification">{user.identification}</td>
                                        <td data-label="Name">{user.name}</td>
                                        <td data-label="Email">{user.email}</td>
                                        <td data-label="Type">{user.type}</td>
                                        <td data-label="Zone">{user.zone}</td>
                                        <td data-label="Zone"><span className="warning" onClick={()=>updateUser(user)}>{icons.edit}</span></td>
                                        <td data-label="Zone"><span className="danger" onClick={()=>deleteUser(user.id)}>{icons.delete}</span></td>
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
                        <Modal.Title>User</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="row">
                            <div className="col-xs-12 col-lg-6">
                                <label htmlFor="identification">Identification</label>
                                <input type="text" className="form-control" id="identification"
                                       onChange={handleInputChange} value={user.identification} />
                            </div>
                            <div className="col-xs-12 col-lg-6">
                                <label htmlFor="name">Name</label>
                                <input type="text" className="form-control" id="name"
                                       onChange={handleInputChange} value={user.name} />
                            </div>
                            <div className="col-xs-12 col-lg-6">
                                <label htmlFor="address">Address</label>
                                <input type="text" className="form-control" id="address"
                                       onChange={handleInputChange} value={user.address} />
                            </div>
                            <div className="col-xs-12 col-lg-6">
                                <label htmlFor="cellPhone">Phone</label>
                                <input type="text" className="form-control" id="cellPhone"
                                       onChange={handleInputChange} value={user.cellPhone} />
                            </div>
                            <div className="col-xs-12 col-lg-6">
                                <label htmlFor="email">Email</label>
                                <input type="email" className="form-control" id="email"
                                       onChange={handleInputChange} value={user.email} />
                            </div>
                            <div className="col-xs-12 col-lg-6">
                                <label htmlFor="password">Password</label>
                                <input type="text" className="form-control" id="password"
                                       onChange={handleInputChange} value={user.password} />
                            </div>
                            <div className="col-xs-12 col-lg-6">
                                <label htmlFor="zone">Zone</label>
                                <input type="text" className="form-control" id="zone"
                                       onChange={handleInputChange} value={user.zone} />
                            </div>
                            <div className="col-xs-12 col-lg-6">
                                <label htmlFor="type">Type</label>
                                <select id="type" value={user.type} onChange={handleInputChange} className="form-control">
                                    <option value="">Select one option</option>
                                    <option value="ADM">Administrator</option>
                                    <option value="COORD">Coordinator</option>
                                    <option value="ASE">Sales Advisor</option>
                                </select>
                            </div>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <button className="btn btn-success" onClick={() => saveUser()}>Save</button>
                        <button className="btn btn-secondary" onClick={() => setShow(false)}>Cancel</button>
                    </Modal.Footer>
                </Modal.Dialog>
            </Modal>
        </main>
    )
}
export default Users;