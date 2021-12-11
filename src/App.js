import Login from "./components/login";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Sidebar from "./components/sidebar";

function App() {
  return (
      <Router>
        <Routes>
          <Route exact path="/" element={<Login /> }/>
          <Route exact path="/admin" element={<Sidebar/>}/>
        </Routes>
      </Router>
  );
}

export default App;
