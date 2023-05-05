import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import './App.css';
import Home from "./components/Home";
import Loign from "./components/Loign";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Loign/>}/>
          <Route path="/home" element={<Home/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
