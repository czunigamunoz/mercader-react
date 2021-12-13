import Login from "./components/login";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Admin from "./components/admin";

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Login /> }/>
          <Route path="admin/*" element={<Admin/>}/>
        </Routes>
      </Router>
  );
}

export default App;
