import './App.css';
import './assets/css/index.css'
import { BrowserRouter as Router,Routes,Route} from "react-router-dom";
import {
  LognIn,
  Register
} from "./API/index"

function App() {
  return (
    <div className="App">
    <Router>
    <Routes>
    <Route path="/" element={<LognIn/>}></Route>
    <Route path="/Register" element={<Register/>}></Route>
    </Routes>
    </Router>
    </div>
  );
}

export default App;
