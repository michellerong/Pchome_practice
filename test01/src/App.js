import { BrowserRouter, Route } from "react-router-dom";

import './App.css';
import Home from "./pages/Home";
import FrontPage from "./pages/Frontpage";
function App() {
  return (

    <BrowserRouter>

      <Route exact path="/" >
        <FrontPage />
      </Route>
      <Route path="/Home">
        <Home />
      </Route>
    </BrowserRouter>
  );
}

export default App;
