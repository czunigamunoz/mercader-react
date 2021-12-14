import Sidebar from "../sidebar";
import {Route, Routes} from "react-router-dom";
import DashboardSalesAdvisor from "./dashboardSalesAdvisor";
import OrderSalesAdvisor from "./orderSalesAdvisor";

const SalesAdvisor = () => {

    const menuLinks = {
        Dashboard: "/sales-advisor",
        Users: "/sales-advisor/order"
    }
    return (
        <div className="container__bootstrap-no">
            <Sidebar menuLinks={{menuLinks}}/>
            <Routes>
                <Route path="/" element={<DashboardSalesAdvisor /> }/>
                <Route path="/order" element={<OrderSalesAdvisor/>}/>
            </Routes>
        </div>
    )
}

export default SalesAdvisor;