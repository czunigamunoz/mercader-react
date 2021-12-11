import Login from "./components/login";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Index from "./components/admin";

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Login /> }/>
          <Route path="/admin" element={<Index/>}/>
        </Routes>
      </Router>
  );
}

export default App;
