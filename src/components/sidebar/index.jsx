import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import Constants from "../../config/constants";

const Sidebar = () => {

    const [user, setUser] = useState({});

    const getUser = async () => {
        const idUser = sessionStorage.getItem("user");
        const response = await axios(`${Constants.url_user}/${idUser}`);
        if (response.data.id !== null){
            await setUser(response.data);
        }
    }

    useEffect(() => {
        getUser().then(r => console.log(user));
    }, [user])

    return (
        <aside>
            <section className="top">

                <div className="logo">
                    <img src="../../assets/images/logo.webp" alt="logo"/>
                        <h2 className="text-dark">ERC<span className="text-blue">ADER</span></h2>
                </div>

                <div className="close" id="btnClose">
                    <span className="material-icons-sharp">close</span>
                </div>

            </section>

            <div className="info-sell">
                <span id="nameUser">user.name</span>
                <span id="identificationUser">user.identification</span>
                <span id="emailUser">user.email</span>
                <span id="typeUser">user.type</span>
                <span id="zoneUser">user.zone</span>
            </div>

            <section className="sidebar">

                <Link className="active">
                    <span className="material-icons-sharp">grid_view</span>
                    <h3>Dashboard</h3>
                </Link>
                <Link href="#">
                    <span className="material-icons-sharp">people</span>
                    <h3>Users</h3>
                </Link>
                <Link href="#">
                    <span className="material-icons-sharp">inventory</span>
                    <h3>Products</h3>
                </Link>
                <Link href="#">
                    <span className="material-icons-sharp">logout</span>
                    <h3>Logout</h3>
                </Link>

            </section>

        </aside>
    )
}

export default Sidebar;