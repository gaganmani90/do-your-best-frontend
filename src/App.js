import './App.css';
import React from 'react';
import DYBNavigation from './DYBNavigation';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import { Badge } from "react-bootstrap";
import Signup from './components/signup';

function App() {
  return (
    <div className="App">
      <DYBNavigation />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route exact path="/SignUp" element={<Signup/>} />
      </Routes>
    </div>
  );
}

export default App;
