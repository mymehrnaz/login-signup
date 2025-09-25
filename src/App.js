import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import './App.css';
import Login from "./component/login";
import SignUp from "./component/signUp";
function App() {
  return (
    <Router>
    <div className="App">
<nav>
  <ul>
    <li>
      <Link to="/">Login</Link>
    </li>
    <li>
      <Link to="/SignUp">Sign Up</Link>
    </li>
  </ul>
</nav>
<Routes>
  <Route exact="true" path='/' element={<Login />}></Route>
  <Route path='/SignUp' element={<SignUp />}></Route>
</Routes>
    </div>
    </Router>
  );
}

export default App;
