import Sidebar from "../sidebar";
import { Route, Routes} from "react-router-dom";
import Dashboard from "./dashboard";
import Users from "./users";

const Admin = () => {

    const menuLinks = {
        Dashboard: "/admin",
        Users: "/admin/users",
        Products: "/products"
    }
    return (
        <div className="container">
            <Sidebar menuLinks={{menuLinks}}/>
            <Routes>
                <Route path="/" element={<Dashboard /> }/>
                <Route path="/users" element={<Users/>}/>
            </Routes>
        </div>
    )
}

export default Admin;