import Sidebar from "../sidebar";
import { Route, Routes} from "react-router-dom";
import DashboardAdmin from "./dashboardAdmin";
import Users from "./users";
import Products from "./products";

const Admin = () => {

    const menuLinks = {
        Dashboard: "/admin",
        Users: "/admin/users",
        Products: "/admin/products"
    }
    return (
        <div className="container__bootstrap-no">
            <Sidebar menuLinks={{menuLinks}}/>
            <Routes>
                <Route path="/" element={<DashboardAdmin /> }/>
                <Route path="/users" element={<Users/>}/>
                <Route path="/products" element={<Products/>}/>
            </Routes>
        </div>

    )
}

export default Admin;