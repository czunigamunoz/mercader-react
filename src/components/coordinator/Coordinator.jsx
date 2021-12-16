import Sidebar from "../sidebar/Sidebar";
import {Route, Routes} from "react-router-dom";
import DashboardCoordinator from "./DashboardCoordinator";
import OrderCoordinator from "./OrderCoordinator";

const Coordinator = () => {
    const menuLinks = {
        Dashboard: "/coordinator/dashboard",
        Order: "/coordinator/order"
    }

    return (
        <div className="container__bootstrap-no">
            <Sidebar menuLinks={{menuLinks}}/>
            <Routes>
                <Route path="/dashboard" element={<DashboardCoordinator /> }/>
                <Route path="/order" element={<OrderCoordinator/>}/>
                <Route path="*" element={<DashboardCoordinator/>}/>
            </Routes>
        </div>
    )

}

export default Coordinator;