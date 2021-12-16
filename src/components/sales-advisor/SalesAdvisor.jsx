import Sidebar from "../sidebar/Sidebar";
import {Route, Routes} from "react-router-dom";
import DashboardSalesAdvisor from "./DashboardSalesAdvisor";
import OrderSalesAdvisor from "./OrderSalesAdvisor";
import OrderByDate from "./OrderByDate";
import OrderByStatus from "./OrderByStatus";

const SalesAdvisor = () => {

    const menuLinks = {
        Dashboard: "/sales-advisor",
        Order: "/sales-advisor/order",
        OrderDate: "/sales-advisor/order-by-date",
        OrderStatus: "/sales-advisor/order-by-status"
    }
    return (
        <div className="container__bootstrap-no">
            <Sidebar menuLinks={{menuLinks}}/>
            <Routes>
                <Route path="/" element={<DashboardSalesAdvisor /> }/>
                <Route path="/order" element={<OrderSalesAdvisor/>}/>
                <Route path="/order-by-date" element={<OrderByDate/>}/>
                <Route path="/order-by-status" element={<OrderByStatus/>}/>
            </Routes>
        </div>
    )
}

export default SalesAdvisor;