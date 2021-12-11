import {useEffect, useState} from "react";
import axios from "axios";
import Constants from "../../config/constants";
import '../../styles/common.css';
import {Link} from "react-router-dom";
import logo from '../../assets/images/logo.webp';

const Sidebar = () => {
    const [user, setUser] = useState({});

    const getUser = async () => {
        const idUser = sessionStorage.getItem("user");
        const response = await axios(`${Constants.url_user}/${idUser}`);
        if (response.data.id !== null){
            return response;
        }
    }

    useEffect(() => {
        getUser().then((response) => setUser(response.data));
    }, []);

    return (
        <aside>
            <section className="top">

                <div className="logo">
                    <img src={logo} alt="logo"/>
                        <h2 className="text-dark">ERC<span className="text-blue">ADER</span></h2>
                </div>

                <div className="close" id="btnClose">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"/></svg>
                </div>

            </section>

            <div className="info-sell">
                <span id="nameUser">{user.name}</span>
                <span id="identificationUser">{user.identification}</span>
                <span id="emailUser">{user.email}</span>
                <span id="typeUser">{user.type}</span>
                <span id="zoneUser">{user.zone}</span>
            </div>

            <section className="sidebar">

                <Link to="/admin" className="active">
                    <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><g><rect fill="none" height="24" width="24"/></g><g><g><rect height="8" width="8" x="3" y="3"/><rect height="8" width="8" x="3" y="13"/><rect height="8" width="8" x="13" y="3"/><rect height="8" width="8" x="13" y="13"/></g></g></svg>
                    <h3>Dashboard</h3>
                </Link>
                <Link to="/admin">
                    <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><rect fill="none" height="24" width="24"/><g><path d="M12,12.75c1.63,0,3.07,0.39,4.24,0.9c1.08,0.48,1.76,1.56,1.76,2.73L18,18H6l0-1.61c0-1.18,0.68-2.26,1.76-2.73 C8.93,13.14,10.37,12.75,12,12.75z M4,13c1.1,0,2-0.9,2-2c0-1.1-0.9-2-2-2s-2,0.9-2,2C2,12.1,2.9,13,4,13z M5.13,14.1 C4.76,14.04,4.39,14,4,14c-0.99,0-1.93,0.21-2.78,0.58C0.48,14.9,0,15.62,0,16.43V18l4.5,0v-1.61C4.5,15.56,4.73,14.78,5.13,14.1z M20,13c1.1,0,2-0.9,2-2c0-1.1-0.9-2-2-2s-2,0.9-2,2C18,12.1,18.9,13,20,13z M24,16.43c0-0.81-0.48-1.53-1.22-1.85 C21.93,14.21,20.99,14,20,14c-0.39,0-0.76,0.04-1.13,0.1c0.4,0.68,0.63,1.46,0.63,2.29V18l4.5,0V16.43z M12,6c1.66,0,3,1.34,3,3 c0,1.66-1.34,3-3,3s-3-1.34-3-3C9,7.34,10.34,6,12,6z"/></g></svg>
                    <h3>Users</h3>
                </Link>
                <Link to="/admin">
                    <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><g><rect fill="none" height="24" width="24"/></g><g><g><path d="M5,5h2v3h10V5h2v5h2V3h-6.18C14.4,1.84,13.3,1,12,1S9.6,1.84,9.18,3H3v18h8v-2H5V5z M12,3c0.55,0,1,0.45,1,1s-0.45,1-1,1 s-1-0.45-1-1S11.45,3,12,3z"/><polygon points="21,11.5 15.51,17 12.5,14 11,15.5 15.51,20 22.5,13"/></g></g></svg>
                    <h3>Products</h3>
                </Link>
                <Link to="/">
                    <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><g><path d="M0,0h24v24H0V0z" fill="none"/></g><g><g><polygon points="5,5 12,5 12,3 3,3 3,21 12,21 12,19 5,19"/><polygon points="21,12 17,8 17,11 9,11 9,13 17,13 17,16"/></g></g></svg>
                    <h3>Logout</h3>
                </Link>

            </section>
        </aside>
    )
}

export default Sidebar;