import './App.css';
import React from 'react';
import DYBNavigation from './DYBNavigation';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import { Badge } from "react-bootstrap";
import Signup from './components/signup';
import Login from './components/login';
import PrivateRoute from './components/privateRoute';

function App() {
  return (
    <div className="App">
      <DYBNavigation />
      <Routes>
        <Route path='/' element={<PrivateRoute />} >
        <Route path='/' element={<Home />} />
          </Route>
        <Route exact path="/SignUp" element={<Signup/>} />
        <Route exact path="/Login" element={<Login/>} />
      </Routes>
    </div>
  );
}

export default App;
