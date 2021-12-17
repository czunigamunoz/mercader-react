import Sidebar from "../sidebar/Sidebar";
import {Route, Routes} from "react-router-dom";
import DashboardSalesAdvisor from "./DashboardSalesAdvisor";
import OrderSalesAdvisor from "./OrderSalesAdvisor";
import OrderByDate from "./OrderByDate";
import OrderByStatus from "./OrderByStatus";
import ProductsListSalesMan from "./ProductsListSalesMan";

const SalesAdvisor = () => {

    const menuLinks = {
        Dashboard: "/sales-advisor/dashboard",
        Order: "/sales-advisor/order",
        OrderDate: "/sales-advisor/order-by-date",
        OrderStatus: "/sales-advisor/order-by-status",
        Products: "/sales-advisor/products"
    }
    return (
        <div className="container__bootstrap-no">
            <Sidebar menuLinks={{menuLinks}}/>
            <Routes>
                <Route path="/dashboard" element={<DashboardSalesAdvisor /> }/>
                <Route path="/order" element={<OrderSalesAdvisor/>}/>
                <Route path="/order-by-date" element={<OrderByDate/>}/>
                <Route path="/order-by-status" element={<OrderByStatus/>}/>
                <Route path="/products" element={<ProductsListSalesMan/>}/>
                <Route path="*" element={<DashboardSalesAdvisor />} />
            </Routes>
        </div>
    )
}

export default SalesAdvisor;