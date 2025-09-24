import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import './App.css';
import login from "./component/login";
import signUp from "./component/signUp";
function App() {
  return (
    <Router>
    <div className="App">
<nav>
  <ul>
    <li>
      <link to="/">Login</link>
    </li>
    <li>
      <link to="/signUp"></link>
    </li>
  </ul>
</nav>
<Routes>
  <Route exact="true" path='/' element={<login />}></Route>
  <Route path='/signUp' element={<signUp />}></Route>
</Routes>
    </div>
    </Router>
  );
}

export default App;
