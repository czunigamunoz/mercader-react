import Sidebar from "../sidebar/Sidebar";
import { Route, Routes} from "react-router-dom";
import DashboardAdmin from "./DashboardAdmin";
import Users from "./Users";
import Products from "./Products";

const Admin = () => {

    const menuLinks = {
        Dashboard: "/admin/dashboard",
        Users: "/admin/users",
        Products: "/admin/products"
    }
    return (
        <div className="container__bootstrap-no">
            <Sidebar menuLinks={{menuLinks}}/>
            <Routes>
                <Route path="/dashboard" element={<DashboardAdmin /> }/>
                <Route path="/users" element={<Users/>}/>
                <Route path="/products" element={<Products/>}/>
                <Route path="*" element={<DashboardAdmin /> }/>
            </Routes>
        </div>

    )
}

export default Admin;