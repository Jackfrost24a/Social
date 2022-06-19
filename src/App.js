import Home from "./pages/Home/Home";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";
import Register from "./pages/register/Register";
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  return (
    <Router>
    <Routes>
    <Route exact path='/Login' element={<Login/>} />
        <Route path="/Register" element={ <Register /> }/>
        <Route path="/" element={ <Home /> }/>
        <Route path="/Profile/:username" element={ <Profile/> }/>
    </Routes>
</Router>
  );

}

export default App;
