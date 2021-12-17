import {useEffect, useState} from "react";
import {NavLink, useNavigate} from "react-router-dom";
import logo from '../../assets/images/logo.webp';
import {icons} from "../../config/constants";

const Sidebar = (props) => {
    let navigate = useNavigate();
    const {menuLinks} = props.menuLinks;
    const [user, setUser] = useState({});

    useEffect(() => {
        setUser(JSON.parse(sessionStorage.getItem("user")));
    }, []);

    const signOut = () => {
        sessionStorage.removeItem("user");
        navigate('/');
    }

    return (
        <aside className="aside">
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

                {
                    Object.keys(menuLinks).map((link, i) => {
                        return (
                            <NavLink exact="true" to={menuLinks[link]} className={({ isActive }) => (isActive ? "active-nav" : "")}  key={i}>
                                {(() => {
                                    if (link === 'Dashboard') return icons.grid
                                    if (link === 'Users') return icons.users
                                    if (link === 'Products') return icons.products
                                    if (link === 'Order') return icons.add_shopping
                                    if (link === 'OrderDate') return icons.date
                                    if (link === 'OrderStatus') return icons.status
                                })()}
                                <h3>{link}</h3>
                            </NavLink>
                        )
                    })
                }
                <button className="mt-auto p-3 btn--sign-out w-100" onClick={() => signOut()}>
                    {icons.logout}&nbsp;&nbsp;
                    Logout
                </button>
            </section>
        </aside>
    )
}

export default Sidebar;