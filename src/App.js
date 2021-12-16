import Login from "./components/login/Login";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Admin from "./components/admin/Admin";
import SalesAdvisor from "./components/sales-advisor/SalesAdvisor";
import Coordinator from "./components/coordinator/Coordinator";

function App() {
  return (
      <Router>
        <Routes>
          <Route exact path="/" element={<Login /> }/>
          <Route path="admin/*" element={<Admin/>}/>
          <Route exact path="sales-advisor/*" element={<SalesAdvisor/>}/>
          <Route exact path="coordinator/*" element={<Coordinator/>}/>
        </Routes>
      </Router>
  );
}

export default App;
