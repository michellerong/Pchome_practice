import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Switch as RouteSwitch } from 'react-router-dom';
import './App.css';
import Home from "./pages/Home";
function App() {
  return (
    <Router>
      
      <Routes>
      <Route path="/" exact element={<Home />} />
      </Routes>
      
    </Router>
  );
}

export default App;