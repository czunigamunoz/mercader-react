import Sidebar from "../sidebar";
import {Route, Routes} from "react-router-dom";
import DashboardCoordinator from "./dashboardCoordinator";
import OrderCoordinator from "./orderCoordinator";

const Coordinator = () => {

    const menuLinks = {
        Dashboard: "/coordinator",
        Users: "/coordinator/order"
    }

    return (
        <div className="container__bootstrap-no">
            <Sidebar menuLinks={{menuLinks}}/>
            <Routes>
                <Route path="/" element={<DashboardCoordinator /> }/>
                <Route path="/order" element={<OrderCoordinator/>}/>
            </Routes>
        </div>
    )

}

export default Coordinator;